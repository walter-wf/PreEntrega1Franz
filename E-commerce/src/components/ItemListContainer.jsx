import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import { products } from "../data/products";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = (props) => {
  //Usar los hooks antes del return ( ver la after class)
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    mypromise.then((response) => setItems(response))
  }, []);

  console.log(items)

  return (
    <Container className="mt-4">
      <h1>{props.greeting || "Bienvenido"}</h1>
      <ItemList items={items} />
    </Container>
  );
};