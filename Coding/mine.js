const fetch = require('node-fetch');

const apiKey = 'YOUR_API_KEY';
const symbol = 'AAPL'; // Example: Apple Inc. options
const expiryDate = '2024-03-16'; // Example: March 16, 2024

async function fetchFutures(symbol) {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&apikey=${apiKey}`);
    const data = await response.json();
    return data;
}

async function fetchOptionsChain(symbol, expiryDate) {
    const response = await fetch(`https://www.alphavantage.co/query?function=OPTION_CHAIN&symbol=${symbol}&expiry=${expiryDate}&apikey=${apiKey}`);
    const data = await response.json();
    return data;
}

// Example usage
(async () => {
    try {
        // Fetch and print futures data
        const futuresData = await fetchFutures(symbol);
        console.log('Futures Data:');
        console.log(futuresData);

        // Fetch and print options chain data
        const optionsChain = await fetchOptionsChain(symbol, expiryDate);
        console.log('\nOptions Chain Data:');
        console.log(optionsChain);
    } catch (error) {
        console.error('Error:', error);
    }
})();
