import React, { useMemo, useState } from 'react';
import './App.css';
import Address from './components/Address';
import { Liquidation_OrderBy, OrderDirection, useLiquidationQuery } from './generated/graphql';
import { DateTime } from 'luxon';
import LoadedComponent from './components/LoadedComponent';
import { wad4human } from './helpers';

const App = () => {
  const [page, setPage] = useState<number>(0);
  const variables = useMemo(() => ({
    skip: page ? (page * 10) + 1 : 0,
    first: 10,
    orderBy: Liquidation_OrderBy.Timestamp,
    orderDirection: OrderDirection.Desc,
  }), [page])
  const [{ data: { liquidations = [] } = {}, fetching, error }] = useLiquidationQuery({
    variables,
  });
  return (
    <div className="container p-10 min-h-screen bg-gray-100 min-w-full">
      <div className="inline-block">
        <table className="table-auto bg-white bord rounded-md shadow">
          <thead>
          <tr className="border-solid border-b border-gray-100">
            <th className="px-10 py-5">Id</th>
            <th className="px-10 py-5">Timestamp</th>
            <th className="px-10 py-5">Penalty Account</th>
            <th className="px-10 py-5">Reward Account</th>
            <th className="px-10 py-5">Deposit</th>
          </tr>
          </thead>
          <tbody>
          <LoadedComponent
            fetching={fetching}
            error={!!error}
            fetchingComponent={<tr><td>Fetching</td></tr>}
            errorComponent={<tr><td>Fetching</td></tr>}>
            {
              liquidations.map((liq) => (
                <tr key={liq.id}>
                  <td className="px-10 py-4">
                    <input defaultValue={liq.id}/>
                  </td>
                  <td className="px-10 py-4">{DateTime.fromSeconds(liq.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}</td>
                  <td className="px-10 py-4">
                    <Address address={liq.penaltyAccount}/>
                  </td>
                  <td className="px-10 py-4">
                    <Address address={liq.rewardAccount}/>
                  </td>
                  <td className="px-10 py-4"><span className="text-green-500 pr-1">◈</span>{wad4human(liq.deposit)}</td>
                </tr>
              ))
            }
          </LoadedComponent>
          </tbody>
        </table>
        <div className="flex justify-between">
          <a className="text-blue-500 block" onClick={() => setPage(page => page - 1)}>← Prev</a>
          <a className="text-blue-500 block" onClick={() => setPage(page => page + 1)}>Next →</a>
        </div>
      </div>
    </div>
  );
};

export default App;
