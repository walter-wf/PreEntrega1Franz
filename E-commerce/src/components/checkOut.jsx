/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CartContext } from "../context/cartContext"; // Corregir aquí
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

const CheckOut = () => {
  const { items, clear } = useContext(CartContext); // Corregir aquí
  const [comprador, setComprador] = useState(initialValues);

  const sendOrder = async (event) => {
    event.preventDefault();

    if (!comprador.name || !comprador.phone || !comprador.email) {
      alert(
        "Por favor, completa todos los campos del formulario antes de enviar."
      );
      return;
    }

    const total = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    const order = {
      comprador,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderCollection, order);
      alert(`La orden ${docRef.id} se realizó con éxito`);
      setComprador(initialValues);
      clear();
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
  };

  return (
    <Form style={styles.form} onSubmit={sendOrder}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={styles.label}>Email :</Form.Label>
        <Form.Control
          style={styles.input}
          type="email"
          placeholder="Enter email"
          value={comprador.email}
          onChange={(e) =>
            setComprador({ ...comprador, email: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={styles.label}>Nombre:</Form.Label>
        <Form.Control
          style={styles.input}
          type="text"
          placeholder="Your Name"
          value={comprador.name}
          onChange={(e) => setComprador({ ...comprador, name: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={styles.label}>Telefono:</Form.Label>
        <Form.Control
          style={styles.input}
          type="number"
          placeholder="+54"
          value={comprador.phone}
          onChange={(e) =>
            setComprador({ ...comprador, phone: e.target.value })
          }
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={styles.button}>
        Enviar
      </Button>
    </Form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "1em",
    fontFamily: "cursive",
  },
  input: {
    fontSize: "1em",
    marginLeft: ".5em",
  },
  button: {
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "blue",
    marginTop: ".5em",
    cursor: "pointer",
  },
};

export default CheckOut;
