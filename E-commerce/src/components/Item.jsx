import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card style={{ width: "18rem", marginBottom: "20px", marginRight: "20px" }}>
      <Card.Img
        variant="top"
        src={item.pictureURL}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body
        style={{ display: "flex", flexDirection: "column", padding: "15px" }}
      >
        <Card.Title style={{ marginBottom: "15px" }}>{item.title}</Card.Title>
        <Card.Text style={{ flex: "1", marginBottom: "15px" }}>
          {item.description}
        </Card.Text>
        <Card.Text style={{ marginBottom: "15px" }}>
          Precio: ${item.price}
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              width: "100%",
              justifyContent: "space-around", // Centrar horizontalmente
            }}
          >
            <Button
              variant="secondary"
              onClick={handleDecrement}
              style={{
                backgroundColor: "blue",
                borderColor: "blue",
                width: "30px",
              }}
            >
              -
            </Button>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>
              {quantity}
            </span>
            <Button
              variant="secondary"
              onClick={handleIncrement}
              style={{
                backgroundColor: "blue",
                borderColor: "blue",
                width: "30px",
              }}
            >
              +
            </Button>
          </div>
        </div>

        <Button
          variant="primary"
          style={{
            marginTop: "10px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#28a745")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "blue")}
        >
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
