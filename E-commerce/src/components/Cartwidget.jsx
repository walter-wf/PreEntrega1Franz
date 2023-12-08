import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acc, valorActual) => acc + valorActual.quantity,
    0
  );

  return (
    <Link to={"/cart"}>
      <div className="Contenedor-Widget">
        <div>{total}</div>
        <FontAwesomeIcon icon={faShoppingCart} className="carrito" />
      </div>
    </Link>
  );
};
