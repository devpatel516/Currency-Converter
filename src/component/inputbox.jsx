import React from 'react';

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions,
    selectedCurrency = "inr",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    return (
        <div className={`${className} w-1/2 bg-black text-purple-500 p-3 rounded-lg flex justify-center`}>
            <div>
                <label className="">{label}</label>
                <input 
                    type="number"
                    className="outline-none w-full"
                    placeholder="amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option className='text-black' key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Inputbox;