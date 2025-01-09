import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db, storage } from "../firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export const createNewCategory=async({data,image})=>{
    if(!image){
        throw new Error("Image is required");
    }
    if(!data?.name){
        throw new Error("Name is required");
    }
    if(!data?.url){
        throw new Error("URL is required");
    }
    const newId=doc(collection(db,"ids")).id;
    const imgRef=ref(storage,`categories/${newId}`);
    await uploadBytes(imgRef,image);
    const imgURL=await getDownloadURL(imgRef);

    await setDoc(doc(db,`categories/${newId}`),{
        ...data,
        id:newId,
        imageURL:imgURL,
        timeStampCreate:Timestamp.now()
    })
}