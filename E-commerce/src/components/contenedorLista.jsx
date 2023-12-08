import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemsList from "./itemsList";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Container } from "react-bootstrap";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((querySnapshot) => {
      let items = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      if (id) {
        items = items.filter(
          (item) =>
            item.category && item.category.toLowerCase() === id.toLowerCase()
        );
      }
      setItems(items);
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <div>
        <h1 className="Texto">{props.greeting}</h1>
        {items ? <ItemsList items={items} /> : <>Loading</>}
      </div>
    </Container>
  );
};
