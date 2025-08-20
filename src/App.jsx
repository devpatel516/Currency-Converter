import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import InputBox from './component/inputbox.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-500 to-red-600 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full max-w-md mx-4 p-6 bg-amber-50/95 rounded-2xl shadow-2xl border-2 border-amber-500 backdrop-blur-sm">
        <div className="flex flex-col items-center p-4 bg-gradient-to-b from-amber-100 to-amber-200 rounded-xl border border-amber-400">
          <h1 className="text-3xl font-bold text-red-800 font-[Noto Serif Devanagari] mb-6 text-center tracking-wide">
            Currency Converter
          </h1>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            className="mt-4 w-full"
          />
          <div className="flex justify-center my-3">
            <button
              onClick={swap}
              className="bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 py-2 px-6 font-semibold uppercase tracking-wide font-[Noto Serif Devanagari] shadow-md hover:shadow-lg active:shadow-none"
            >
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            amountDisabled={true}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            className="w-full"
          />
          <button
            type="submit"
            className="bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 py-2 px-6 mt-3 font-semibold uppercase tracking-wide font-[Noto Serif Devanagari] shadow-md hover:shadow-lg active:shadow-none"
            onClick={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;