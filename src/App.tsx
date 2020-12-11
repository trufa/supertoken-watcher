import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Address from './components/Address';
import { Liquidation_OrderBy, OrderDirection, useLiquidationQuery } from './generated/graphql';
import { DateTime } from 'luxon';
import FetchingComponent from './components/FetchingComponent';
import { wad4human } from './helpers';

const AMOUNT_LOADED: number = 10;

const App = () => {
  const [page, setPage] = useState<number>(0);
  const variables = useMemo(() => ({
    skip: page ? (page * AMOUNT_LOADED) + 1 : 0,
    first: AMOUNT_LOADED,
    orderBy: Liquidation_OrderBy.Timestamp,
    orderDirection: OrderDirection.Desc,
  }), [page]);
  const [{ data: { liquidations = [] } = {}, fetching, error }] = useLiquidationQuery({
    variables,
  });
  const [previousDisabled, setPreviousDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);
  useEffect(() => {
    if (page > 0) {
      setPreviousDisabled(false);
    } else {
      setPreviousDisabled(true);
    }
    if (liquidations.length < AMOUNT_LOADED || liquidations.length === 0) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [page, liquidations.length, previousDisabled, nextDisabled, liquidations]);
  const whileFetchingComponent = <tr><td>Fetching</td></tr>;
  const errorFetchingComponent = <tr><td>Error</td></tr>;
  const zeroResultsComponent = <tr className="whitespace-nowrap"><td colSpan={5} className="px-10 py-4 text-center">No results to show</td></tr>;
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
          <FetchingComponent
            fetching={fetching}
            error={!!error}
            whileFetchingComponent={whileFetchingComponent}
            ifErrorComponent={errorFetchingComponent}
            hadZeroResults={liquidations.length === 0}
            zeroResultsComponent={zeroResultsComponent}
          >
            {
              liquidations.map((liq) => (
                <tr key={liq.id}>
                  <td className="px-10 py-4">
                    <input defaultValue={liq.id}/>
                  </td>
                  <td
                    className="px-10 py-4"
                  >
                    {DateTime.fromSeconds(liq.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}
                  </td>
                  <td className="px-10 py-4">
                    <Address address={liq.penaltyAccount}/>
                  </td>
                  <td className="px-10 py-4">
                    <Address address={liq.rewardAccount}/>
                  </td>
                  <td className="px-10 py-4">
                    <span className="text-green-500 pr-1">◈</span>
                    {wad4human(liq.deposit)}
                  </td>
                </tr>
              ))
            }
          </FetchingComponent>
          </tbody>
        </table>
        <div className="flex justify-between">
          <button
            disabled={previousDisabled}
            className="text-blue-500 block cursor-pointer disabled:text-gray-500 disabled:opacity-50 disabled:cursor-auto"
            onClick={() => setPage(page => page - 1)}
          >
            ← Prev
          </button>
          <button
            disabled={nextDisabled}
            className="text-blue-500 block cursor-pointer disabled:text-gray-500 disabled:opacity-50 disabled:cursor-auto"
            onClick={() => setPage(page => page + 1)}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
