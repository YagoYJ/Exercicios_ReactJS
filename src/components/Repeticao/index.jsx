import React from "react";

import products from "../data/products.js";

export default function Repeticao(props) {
  function getProductsListItem() {
    return products.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.nome} - {prod.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProductsListItem()}</ul>
    </div>
  );
}
