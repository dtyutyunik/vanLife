// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import {db} from "./firebaseSetup/fireBase.js";


const vansCollectionRef = collection(db, "vans");

function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans() {

    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans;
}

export async function getVan(id) {

    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef)
    if (snapshot.exists()) {
        return {
            ...snapshot.data(),
            id: snapshot.id
        }
    }
}

export async function getHostVans() {

    const q = query(vansCollectionRef, where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans;

}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data
}