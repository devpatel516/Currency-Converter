import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates)); // Changed from res[currency] to res.rates
    }, [currency]);
    
    console.log(data);
    return data;
}

export default useCurrencyInfo;