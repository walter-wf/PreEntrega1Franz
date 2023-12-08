/* /* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemList from "../components/ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");

      try {
        const snapshot = await getDocs(itemsCollection);

        if (snapshot.size === 0) {
          console.log("No hay resultados");
        } else {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(data);
          setItems(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "items"),
      where("categoryId", "==", "Consolas")
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) console.log("No results");
      else console.log(snapshot.doc.map((doc) => {}));
    });
  });

  console.log(items);

  return (
    <Container className="mt-4">
      <h1>{props.greeting || "Bienvenido"}</h1>
      <ItemList items={items} />
    </Container>
  );
};
