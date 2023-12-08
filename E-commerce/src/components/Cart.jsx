/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../context/cartContext";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import CheckOut from "./checkOut";

const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);
  const Navigate = useNavigate();

  const total = items.reduce(
    (acc, valorActual) => acc + valorActual.quantity * valorActual.price,
    0
  );
  if (!items.length) {
    return (
      <Container className="mt-4">
        <h2 style={{ textAlign: "center" }}>Carrito vacio!</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => Navigate("/")}
            style={{
              padding: "1em",
              borderRadius: "10px",
              backgroundColor: "transparent",
              marginTop: "1em",
              cursor: "pointer",
            }}
          >
            volve al inicio
          </button>
        </div>
      </Container>
    );
  }

  return (
    <Container
      className="mt-4"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          marginBottom: "1em",
        }}
      >
        Carrito
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "15%",
            }}
          >
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th style={{ marginLeft: "2em" }}>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody style={{}}>
          {items?.map((item) => (
            <tr
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: "15%",
              }}
            >
              <td style={{ fontSize: "20px" }}>{item.title}</td>
              <td style={{ fontSize: "20px" }}>{item.price}</td>
              <td style={{}}>
                <img src={item.pictureUrl} width={"150px"} alt="" />
              </td>
              <td style={{ fontSize: "20px" }}>{item.quantity}</td>

              {/* <td>{item.price}</td> */}

              <td
                style={{ fontSize: "20px" }}
                onClick={() => onRemove(item.id)}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ fontSize: "20px", textAlign: "end" }}>
              Total:{total}
            </td>
          </tr>
        </tfoot>
      </Table>

      <button
        onClick={clear}
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "20px",
          fontFamily: "cursive",
          cursor: "pointer",
          marginBottom: "1em",
        }}
      >
        Vaciar carrito
      </button>

      <CheckOut />
    </Container>
  );
};

export default Cart;
