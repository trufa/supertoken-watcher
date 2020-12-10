import React from 'react';
import './App.css';
import { useQuery } from 'urql';
import Address from './components/Address';

const LiquidationQuery = `
  {
    liquidations(first: 5) {
      id
      penaltyAccount
      rewardAccount
      deposit
      timestamp
    }
  }
`;

const App = () => {

  const [{ data: { liquidations }, fetching, error }] = useQuery({
    query: LiquidationQuery,
  });
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(liquidations);
  return (
    <div className="container p-10 min-h-screen bg-gray-100 min-w-full">
      <table className="table-auto bg-white bord rounded-md shadow">
        <thead>
        <tr className="border-solid border-b border-gray-100">
          <th className="px-10 py-5">Id</th>
          <th className="px-10 py-5">Penalty Account</th>
          <th className="px-10 py-5">Reward Account</th>
          <th className="px-10 py-5">Deposit</th>
        </tr>
        </thead>
        <tbody>
        {
          liquidations.map((liq: any) => (
            <tr>
              <td className="px-10 py-4">{liq.id}</td>
              <td className="px-10 py-4">
                <Address address={liq.penaltyAccount} />
              </td>
              <td className="px-10 py-4">
                <Address address={liq.rewardAccount} />
              </td>
              <td className="px-10 py-4"><span className="text-green-500">◈</span> 0.2394245</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default App;
