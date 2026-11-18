import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  // Keep every product if "all" is chosen, otherwise only the matching category
  const productsToShow = sampleProducts.filter(
    (product) => category === 'all' || product.category === category
  )

  return (
    <div>
      <h2>Available Products</h2>

      {productsToShow.length === 0 ? (
        <p>No products available.</p>
      ) : (
        productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList