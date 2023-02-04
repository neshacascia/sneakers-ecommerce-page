import { createContext, useState } from 'react';

import { getProductData } from '../sneakersData';

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addItem: () => {},
  addOneItem: () => {},
  removeOneItem: () => {},
  deleteItem: () => {},
  getTotalCost: () => {},
});

export default function CartProvider(props) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQty(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addItem(id, qty) {
    const quantity = getProductQty(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: qty }]);
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + qty }
            : product
        )
      );
    }
  }

  function addOneItem(id) {
    setCartProducts(
      cartProducts.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function removeOneItem(id) {
    const quantity = getProductQty(id);

    if (quantity === 1) {
      deleteItem(id);
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteItem(id) {
    setCartProducts(cartProducts =>
      cartProducts.filter(product => product.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;

    cartProducts.map(cartItem => {
      const productData = getProductData(cartItem.id);

      totalCost += productData.price * cartItem.quantity;
    });

    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQty,
    addItem,
    addOneItem,
    removeOneItem,
    deleteItem,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
