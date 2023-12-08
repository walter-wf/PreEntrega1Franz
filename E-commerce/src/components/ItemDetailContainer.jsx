/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Asegúrate de importar estas funciones
import Container from "react-bootstrap/Container";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);

    getDoc(docRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setItem({ id: docSnapshot.id, ...docSnapshot.data() });
      } else {
        console.log("No such document!");
      }
    });
  }, [id]);

  return (
    <Container className="mt-4">
      {item ? <ItemDetail item={item} /> : <>Loding...</>}
    </Container>
  );
};
