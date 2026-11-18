import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // true = dark mode, false = light mode
  const [darkMode, setDarkMode] = useState(false)
  // The list of products the user has added to the cart
  const [cart, setCart] = useState([])
  // The category chosen in the dropdown ("all" shows everything)
  const [category, setCategory] = useState('all')

  // Flip dark mode on or off
  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  // Add a product to the cart (skip it if it is already there)
  function addToCart(product) {
    const alreadyInCart = cart.some((item) => item.id === product.id)
    if (!alreadyInCart) {
      setCart([...cart, product])
    }
  }

  // Colors for the whole app, depending on the mode
  const appStyle = {
    backgroundColor: darkMode ? '#242424' : '#ffffff',
    color: darkMode ? '#ffffff' : '#213547',
    minHeight: '100vh',
    padding: '1rem'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <br />
      <br />

      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={addToCart} />

      <Cart cartItems={cart} />
    </div>
  )
}

export default App