import React from 'react';
import './App.css';
import Address from './components/Address';
import { useLiquidationQuery } from './generated/graphql';
import { DateTime } from 'luxon';
import LoadedComponent from './components/LoadedComponent';
import { wad4human } from './helpers';

const App = () => {
  const [{ data: { liquidations = [] } = {}, fetching, error }] = useLiquidationQuery({
    variables: {},
  });
  console.log(fetching, error);
  return (
    <div className="container p-10 min-h-screen bg-gray-100 min-w-full">
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
                <td className="px-10 py-4">{liq.id.substr(0, 8)}...</td>
                <td className="px-10 py-4">{DateTime.fromSeconds(liq.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}</td>
                <td className="px-10 py-4">
                  <Address address={liq.penaltyAccount}/>
                </td>
                <td className="px-10 py-4">
                  <Address address={liq.rewardAccount}/>
                </td>
                <td className="px-10 py-4"><span className="text-green-500">◈</span>{wad4human(liq.deposit)}</td>
              </tr>
            ))
          }
        </LoadedComponent>

        </tbody>
      </table>
    </div>
  );
};

export default App;
