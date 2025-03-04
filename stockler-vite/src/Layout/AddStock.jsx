import React, { useState } from 'react';

export function AddStock() {

  const apiUrl = import.meta.env.VITE_API_URL

  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/ticker/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        console.log('Ticker added successfully');
      } else {
        console.error('Failed to add ticker');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
     
    return (
      <div className="container sample">
        <h1>Add new ticker</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Symbol"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Create</button>
        </form>
      </div>
    );
}