export const TopStocks = () => {


  const onClick = () => {
    fetch(`http://localhost:3001/ticker/test`, {
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