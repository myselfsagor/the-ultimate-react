import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  //   const pizzaData = [];
  return (
    <div className="menu">
      <h2>Our menu</h2>

      {pizzaData.length > 0 ? (
        <ul>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          {pizzaData.map((pizza, index) => (
            <Pizza key={index} pizza={pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :</p>
      )}
    </div>
  );
}

function Pizza({ pizza }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;

  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
}

// Header component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// Footer component
function Footer() {
  const hour = new Date().getHours();
  //   const hour = 23;
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

// Order component

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// Run the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
