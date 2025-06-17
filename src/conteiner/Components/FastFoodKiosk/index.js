import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Бургер https://primebeef.ru/blog/kak_otlichit_pravilnyj_burger/', price: 150 },
  { id: 2, name: 'Картофель фри', price: 100 },
  { id: 3, name: 'Кока-кола', price: 50 },
  { id: 4, name: 'Чизбургер', price: 180 },
  { id: 5, name: 'Наггетсы', price: 120 },
];

function FastFoodKiosk() {
  const [order, setOrder] = useState([]);

  const addItemToOrder = (item) => {
    setOrder([...order, item]);
  };

  const toggleClear = ()=>{
    setOrder([])
  }

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Панель слева - Order Details */}
      <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
        <h2>Order Details</h2>
        {order.length === 0 ? (
          <p>Заказ пуст. Добавьте товары с правой панели.</p>
        ) : (
          <ul>
            {order.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Панель справа - Add Items */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Add Items</h2>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => addItemToOrder(item)}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            {item.name}
          </button>
        ))}
            <button onClick={toggleClear}>cleane</button>

      </div>
    </div>
  );
}

export default FastFoodKiosk;
