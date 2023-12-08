/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ItemCounter } from "./ItemCounter"; // Asegúrate de que la ruta sea correcta
import { CartContext } from "../context/cartContext";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

  const handleAdd = (quantity) => {
    onAdd(item, quantity);
  };

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          margin: "2em",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>
          {item.title}
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={item.pictureUrl} width={"400px"} alt={item.title} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "cursive",
            }}
          >
            Stock de productos: {item.stock}
          </h4>
          <ItemCounter onAdd={handleAdd} stock={item.stock} initial={1} />
        </div>
      </div>
    </>
  );
};
