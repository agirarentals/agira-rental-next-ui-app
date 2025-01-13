import {db} from '../firestore';
import { doc, getDoc } from "firebase/firestore";

export const getAdmin = async ({ id }) => {
  const data = await getDoc(doc(db, `admins/${id}`));
  if (data.exists()) {
    return data.data();
  } else {
    return null;
  }
};
