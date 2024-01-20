import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
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
    return <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div >
}
const Header = () => {
    // const style = { color: "red", fondSize: '48px', textTransform: 'uppercase' };
    const style = {}
    return <h1 style={style} className='header' >
        Fast React Pizza Co.</h1>
}
const Menu = () => {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length

    return (<main className='menu'>
        <h2>Our menu</h2>

        {numPizzas > 0 ? (<>
            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
            </p>
            <ul className='pizzas'>
                {pizzaData.map(pizza => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                    // <li className='pizza' key={pizza.name}>
                    //     <img alt={pizza.photoName} src={pizza.photoName} />
                    //     <h3>{pizza.name}</h3>
                    //     <p>{pizza.ingredients}</p>
                    //     <span>{pizza.price}</span>
                    // </li>
                ))}
            </ul></>) : (<p>We're still working on our menu. Please come back later :)</p>)
        }
    </main>)
}
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 10;

    const closeHour = 22;
    const isOpen = () => (hour > openHour) && (hour < closeHour)
    // if (hour > openHour && hour < closeHour) alert(`We're currently open!`)
    // else alert(`Sorry we're closed!`)
    console.log('isOpen:', isOpen);
    return < footer className='footer'>
        {/* {new Date().toLocaleTimeString()} 'We're actually open.' */}
        {isOpen ? <Order openHours={openHour} closeHours={closeHour} />
            : (<p>We're open util {closeHour}:00. Come visit us or order online.</p>)}
    </footer>
}
function Order(props) {
    return <div className='order'>
        <p>
            We're happy to welcome you between {props.openHours}:00 and {props.closeHours}:00.
        </p>
        <button className='btn'>Order</button>
    </div>
}
function Pizza({ pizzaObj }) {//also can be props
    console.log('props', pizzaObj);
    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img alt={pizzaObj.photoName} src={pizzaObj.photoName} />
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            {/* {pizzaObj.soldOut ? (<span>SOLD OUT</span>) : (<span>pizzaObj.price</span>)} */}
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </li>
    )
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// before react18
// render(<App/>,document.getElementById("root"))
// root)