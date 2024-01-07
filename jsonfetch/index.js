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
const Menu = () => <main className='menu'>
    <h2>Our menu</h2>
    <Pizza />
    <Pizza />
    <Pizza />
</main>
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 10;

    const closeHour = 22;
    const isOpen = () => (hour > openHour) && (hour < closeHour)
    // if (hour > openHour && hour < closeHour) alert(`We're currently open!`)
    // else alert(`Sorry we're closed!`)

    console.log('isOpen:', isOpen);
    return < footer className='footer'> {new Date().toLocaleTimeString()} 'We're actually open.'</footer>
}

function Pizza() {
    return (<div>
        <img alt='pizzas spinaci' src='pizzas/spinaci.jpg' />
        <h3>Pizza Spinaci</h3>
        <p></p></div>
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