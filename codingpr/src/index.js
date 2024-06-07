import React, { startTransition } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  const numPizzas = pizza.length;
  console.log(numPizzas);
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/*{pizza && (
        <ul className="pizzas">
          {pizza.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>*/}

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizza.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on our menu. Please come back later</p>
      )}

      {/* <Pizza
        photoName="Pizzas\spinaci.jpg"
        pizzaName="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      ></Pizza>
      <Pizza
        photoName="pizzas/funghi.jpg"
        pizzaName="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
      ></Pizza>
      <Pizza
        photoName="pizzas/salamino.jpg"
        pizzaName="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={12}
      ></Pizza>
      <Pizza
        photoName="pizzas/prosciutto.jpg"
        pizzaName="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={12}
  ></Pizza>*/}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  //if (props.pizzaObj.soldOut) return <header />;
  return (
    <li className={`pizza ${pizzaObj}.soldOut? "sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        {/*{pizzaObj.soldOut ? <span>SOLD</span> : <span>pizzaObj.price</span>}*/}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const iSopen = hour >= openHour && hour <= closeHour;
  console.log(iSopen);

  //if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  //else alert("sorry we're closed");

  // if (!iSopen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {iSopen ? (
        <Order openHour={openHour}></Order>
      ) : (
        <p>
          we're happy to welcome you between {closeHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>we're open until {openHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
