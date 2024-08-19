import React, { useState } from "react";

const AddToken = ({ addToken }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenDecimals, setTokenDecimals] = useState(18);
  const [tokenImage, setTokenImage] = useState("");

  const handleAddToken = async () => {
    try {
      if (window.ethereum) {
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage || 'https://example.com/token-image.png',
            },
          },
        });

        if (wasAdded) {
          console.log('Token added to MetaMask');
          addToken({ address: tokenAddress, name: tokenName });
          setTokenAddress("");
          setTokenName("");
          setTokenSymbol("");
          setTokenDecimals(18);
          setTokenImage("");
        } else {
          console.log('Token not added');
        }
      } else {
        alert('MetaMask is not installed!');
      }
    } catch (error) {
      console.error('Error adding token to MetaMask:', error);
    }
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-services min-h-screen p-4">
      <div
        className="bg-white bg-opacity-10 p-10 rounded-3xl shadow-xl w-full max-w-lg transition-transform duration-300 transform hover:scale-105"
        style={{ backdropFilter: 'blur(30px)' }}
      >
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center tracking-wider">
          Add a Token
        </h2>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tokenName">
            Token Name
          </label>
          <input
            id="tokenName"
            type="text"
            placeholder="Enter Token Name"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="w-full px-5 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-md bg-white bg-opacity-20 placeholder-gray-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tokenSymbol">
            Token Symbol
          </label>
          <input
            id="tokenSymbol"
            type="text"
            placeholder="Enter Token Symbol"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="w-full px-5 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-md bg-white bg-opacity-20 placeholder-gray-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tokenAddress">
            Token Address
          </label>
          <input
            id="tokenAddress"
            type="text"
            placeholder="Enter Token Address"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            className="w-full px-5 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-md bg-white bg-opacity-20 placeholder-gray-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tokenDecimals">
            Token Decimals
          </label>
          <input
            id="tokenDecimals"
            type="number"
            placeholder="Enter Token Decimals (default 18)"
            value={tokenDecimals}
            onChange={(e) => setTokenDecimals(Number(e.target.value))}
            className="w-full px-5 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-md bg-white bg-opacity-20 placeholder-gray-400"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tokenImage">
            Token Image URL (optional)
          </label>
          <input
            id="tokenImage"
            type="text"
            placeholder="Enter Token Image URL"
            value={tokenImage}
            onChange={(e) => setTokenImage(e.target.value)}
            className="w-full px-5 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-md bg-white bg-opacity-20 placeholder-gray-400"
          />
        </div>
        <button
          onClick={handleAddToken}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold tracking-wider shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          Add Token to MetaMask
        </button>
      </div>
    </div>
  );
};

export default AddToken;
