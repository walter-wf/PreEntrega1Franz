import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import React from "react";
import { products } from "../data/products";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = (props) => {
  //Usar los hooks antes del return ( ver la after class)
  const [items, setItems] = useState([]);

  const { id }= useParams();
 

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    mypromise.then((response) => { 
      if (!id) {
        setItems(response)
      } else {
        const filterByCategory = response.filter(item => item.category === id);
        setItems(filterByCategory)
      }
      })
  }, []);

  console.log(items)

  return (
    <Container className="mt-4">
      <h1>{props.greeting || "Bienvenido"}</h1>
      <ItemList items={items} />
    </Container>
  );
};