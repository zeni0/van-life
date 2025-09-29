
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, where, query } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyB-ctgIOPdlo2rrH1y5WEAJyqN-jYoLv00",
  authDomain: "vanlife-b0dc3.firebaseapp.com",
  projectId: "vanlife-b0dc3",
  storageBucket: "vanlife-b0dc3.firebasestorage.app",
  messagingSenderId: "1095141236247",
  appId: "1:1095141236247:web:d2bc0fdf83644b92a68652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {...snapshot.data(), id: id}
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans 
}

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}