import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle, BsShieldFillCheck, BsSearch } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[80px] px-4 flex justify-center items-center border-[0.5px] border-gray-500 text-sm font-semibold text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-md";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-3 w-full rounded-xl p-5 outline-none bg-gray-800 text-white border border-gray-700 text-base font-medium shadow-md focus:ring-4 focus:ring-blue-400"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-services py-10">
      <div className="flex flex-col md:flex-row items-start justify-between md:p-20 p-4 space-y-12 md:space-y-0 md:space-x-12">
        <div className="flex flex-1 flex-col items-start md:mr-12 space-y-6">
          <h1 className="text-3xl sm:text-5xl text-white font-bold text-gradient py-2">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left text-white font-light md:w-9/12 w-15/12 text-base sm:text-2xl mb-8">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex items-center my-5 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              <AiFillPlayCircle className="text-white mr-2" fontSize={24} />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            <div className={`${companyCommonStyles} flex items-center justify-center`}>
              <BsShieldFillCheck fontSize={40} className="text-green-400 shadow-lg" />
              <p className="text-lg font-semibold ml-4">Reliability</p>
            </div>
            <div className={`${companyCommonStyles} flex items-center justify-center`}>
              <BsSearch fontSize={40} className="text-blue-400 shadow-lg" />
              <p className="text-lg font-semibold ml-4">Security</p>
            </div>
            <div className={`${companyCommonStyles} flex items-center justify-center`}>
              <SiEthereum fontSize={40} className="text-purple-400 shadow-lg" />
              <p className="text-lg font-semibold ml-4">Ethereum</p>
            </div>
            <div className={`${companyCommonStyles} flex items-center justify-center`}>
              <RiHeart2Fill fontSize={40} className="text-red-400 shadow-lg" />
              <p className="text-lg font-semibold ml-4">Web 3.0</p>
            </div>
            <div className={`${companyCommonStyles} flex items-center justify-center`}>
              <BsShieldFillCheck fontSize={40} className="text-green-400 shadow-lg" />
              <p className="text-lg font-semibold ml-4">Low Fees</p>
            </div>
            <div className={`${companyCommonStyles} flex items-center justify-center`}>
              <BsInfoCircle fontSize={40} className="text-yellow-400 shadow-lg" />
              <p className="text-lg font-semibold ml-4">Blockchain</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full space-y-6">
          <div className="p-4 flex justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full my-5 eth-card bg-gradient-to-r from-gray-800 via-gray-900 to-red-700 shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-full border-4 border-white flex justify-center items-center bg-gray-900 shadow-lg">
                  <SiEthereum fontSize={28} color="#fff" />
                </div>
                <BsInfoCircle fontSize={20} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism rounded-xl shadow-2xl space-y-6">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-4" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-4 bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg"
              >
                Send now
              </button>
            )}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Welcome;
