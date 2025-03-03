export const TopStocks = () => {

    const apiUrl = import.meta.env.VITE_API_URL

    const onClick = () => {
        fetch(`${apiUrl}/ticker/test/GOOGL`, {
            method: 'POST'
        })
        .catch(error => {
        console.error('Error:', error);
        });
    };

    return (
        <div>
            <button onClick={onClick}>AddTicker</button>
        </div>
    );
};