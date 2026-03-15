```javascript
// Firebase SDK imports

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import { 
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
setDoc,
getDoc,
updateDoc,
deleteDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


// Firebase configuration (your API)

const firebaseConfig = {
  apiKey: "AIzaSyAlNZDXLIuL_MadDgko90lN1SE1U1suNDk",
  authDomain: "blood-b6a5c.firebaseapp.com",
  databaseURL: "https://blood-b6a5c-default-rtdb.firebaseio.com",
  projectId: "blood-b6a5c",
  storageBucket: "blood-b6a5c.firebasestorage.app",
  messagingSenderId: "1073096163931",
  appId: "1:1073096163931:web:bb31d7ec739843224cf57e"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Services

const auth = getAuth(app);
const db = getFirestore(app);


// ----------------------------
// USER REGISTER
// ----------------------------

async function registerUser(name,email,password,blood,phone,district){

try{

const userCredential = await createUserWithEmailAndPassword(auth,email,password)

const user=userCredential.user

await setDoc(doc(db,"users",user.uid),{

name:name,
email:email,
blood:blood,
phone:phone,
district:district,
role:"donor",
createdAt:new Date()

})

alert("Registration successful")

}catch(error){

alert(error.message)

}

}


// ----------------------------
// USER LOGIN
// ----------------------------

async function loginUser(email,password){

try{

await signInWithEmailAndPassword(auth,email,password)

alert("Login successful")

}catch(error){

alert(error.message)

}

}


// ----------------------------
// LOGOUT
// ----------------------------

async function logoutUser(){

await signOut(auth)

location.reload()

}


// ----------------------------
// ADD BLOOD REQUEST
// ----------------------------

async function addBloodRequest(data){

try{

await addDoc(collection(db,"bloodRequests"),{

...data,
createdAt:new Date()

})

alert("Blood request posted")

}catch(e){

alert(e.message)

}

}


// ----------------------------
// GET BLOOD REQUESTS
// ----------------------------

async function getBloodRequests(){

const snapshot=await getDocs(collection(db,"bloodRequests"))

let list=[]

snapshot.forEach(doc=>{

list.push({
id:doc.id,
...doc.data()
})

})

return list

}


// ----------------------------
// DELETE REQUEST
// ----------------------------

async function deleteRequest(id){

await deleteDoc(doc(db,"bloodRequests",id))

}


// ----------------------------
// AUTH STATE LISTENER
// ----------------------------

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("User logged in:",user.email)

}else{

console.log("User logged out")

}

})


// EXPORT FUNCTIONS

export {
auth,
db,
registerUser,
loginUser,
logoutUser,
addBloodRequest,
getBloodRequests,
deleteRequest
}
```
