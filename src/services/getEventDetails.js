import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default async function getEventDetails(eventKey) {
  const docRef = doc(db, "events", eventKey);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}