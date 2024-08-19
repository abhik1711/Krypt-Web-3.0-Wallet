import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#1b1b1b] p-6 mb-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          <img
            src={gifUrl || url}
            alt="Transaction"
            className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </div>
        <div className="flex-1">
          <div className="text-white font-extrabold text-lg md:text-xl">
            <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              From: {shortenAddress(addressFrom)}
            </a>
            <br />
            <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              To: {shortenAddress(addressTo)}
            </a>
          </div>
          <p className="text-green-400 text-base md:text-lg mt-2">Amount: {amount} ETH</p>
          {message && (
            <>
              <p className="text-white text-base md:text-lg mt-2">Message: {message}</p>
            </>
          )}
          <p className="text-gray-400 text-sm md:text-base mt-4">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  // Prepare data for charts
  const chartData = {
    labels: transactions.map(transaction => shortenAddress(transaction.addressFrom)),
    datasets: [
      {
        label: 'Transaction Amounts (ETH)',
        data: transactions.map(transaction => transaction.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.7)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const lineChartData = {
    labels: transactions.map(transaction => transaction.timestamp),
    datasets: [
      {
        label: 'Amount over Time',
        data: transactions.map(transaction => transaction.amount),
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services py-12">
      <h3 className="text-white text-4xl md:text-5xl mb-8 text-center font-extrabold leading-tight">
        {currentAccount ? "Latest Transactions" : "Connect your account to see the latest transactions"}
      </h3>

      <div className="w-full max-w-6xl px-4 flex flex-wrap justify-center items-center gap-8 mb-12">
        {[...transactions].reverse().map((transaction, i) => (
          <TransactionsCard key={i} {...transaction} />
        ))}
      </div>

      {/* Tables */}
      <div className="w-full max-w-6xl px-4 mb-12">
        <h4 className="text-white text-2xl mb-4 text-center font-semibold">Transaction Data</h4>
        <div className="bg-[#2c2c2c] p-6 rounded-xl shadow-lg">
          <table className="min-w-full bg-[#1b1b1b] rounded-xl overflow-hidden">
            <thead className="text-white">
              <tr>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-lg">From</th>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-lg">To</th>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-lg">Amount (ETH)</th>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-lg">Message</th>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-lg">Timestamp</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              {[...transactions].reverse().map((transaction, i) => (
                <tr key={i} className="hover:bg-gray-800">
                  <td className="py-2 px-4 border-b border-gray-700">
                    <a href={`https://sepolia.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                      {shortenAddress(transaction.addressFrom)}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    <a href={`https://sepolia.etherscan.io/address/${transaction.addressTo}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                      {shortenAddress(transaction.addressTo)}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-green-400">{transaction.amount} ETH</td>
                  <td className="py-2 px-4 border-b border-gray-700">{transaction.message || '-'}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{transaction.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="w-full max-w-6xl px-4">
        <h4 className="text-white text-2xl mb-4 text-center font-semibold">Transaction Amounts</h4>
        <div className="bg-[#2c2c2c] p-6 rounded-xl shadow-lg mb-12">
          <div className="h-80 w-full">
            <Bar 
              data={chartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                      },
                      color: '#ffffff',
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.dataset.label}: ${context.raw} ETH`,
                      title: () => '',
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                      size: 14,
                      family: 'Arial, sans-serif',
                    },
                    bodyFont: {
                      size: 12,
                      family: 'Arial, sans-serif',
                    },
                    bodyColor: '#ffffff',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                      color: '#ffffff',
                    },
                    title: {
                      display: true,
                      text: 'Amount (ETH)',
                      color: '#ffffff',
                      font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                      },
                    },
                  },
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                      color: '#ffffff',
                      autoSkip: true,
                      maxRotation: 45,
                      minRotation: 45,
                    },
                    title: {
                      display: true,
                      text: 'Sender Address',
                      color: '#ffffff',
                      font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                      },
                    },
                  },
                },
              }} 
            />
          </div>
        </div>

        <h4 className="text-white text-2xl mb-4 mt-12 text-center font-semibold">Amount over Time</h4>
        <div className="bg-[#2c2c2c] p-6 rounded-xl shadow-lg">
          <div className="h-80 w-full">
            <Line 
              data={lineChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                      },
                      color: '#ffffff',
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.dataset.label}: ${context.raw} ETH`,
                      title: () => '',
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                      size: 14,
                      family: 'Arial, sans-serif',
                    },
                    bodyFont: {
                      size: 12,
                      family: 'Arial, sans-serif',
                    },
                    bodyColor: '#ffffff',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                      color: '#ffffff',
                    },
                    title: {
                      display: true,
                      text: 'Amount (ETH)',
                      color: '#ffffff',
                      font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                      },
                    },
                  },
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                      color: '#ffffff',
                      autoSkip: true,
                      maxRotation: 45,
                      minRotation: 45,
                    },
                    title: {
                      display: true,
                      text: 'Timestamp',
                      color: '#ffffff',
                      font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                      },
                    },
                  },
                },
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
