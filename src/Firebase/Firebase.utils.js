import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxAkayoSVPZ8Cu-2X9utBlMNk88OOT6-A",
    authDomain: "clothingstore-5ab7e.firebaseapp.com",
    databaseURL: "https://clothingstore-5ab7e.firebaseio.com",
    projectId: "clothingstore-5ab7e",
    storageBucket: "clothingstore-5ab7e.appspot.com",
    messagingSenderId: "1020641089980",
    appId: "1:1020641089980:web:c493b3716bb6ee4620b3b9",
    measurementId: "G-WM0GGNQ2L0"
  };

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdOn = new Date();
    try{
        await userRef.set({
          displayName, email, createdOn, ...additionalData
        });
    }catch(error){console.log("Error while creating the user. . .")}
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


/*export const loadFirestore = async(cKey, collections)=>{
  const cRef = firestore.collection(cKey)
  const batch = firestore.batch();
  collections.forEach(cItem=>{
    const {title,items} = cItem;
    const dRef = cRef.doc();
    batch.set(dRef, ({title, items}));
  });
  return await batch.commit()
}*/

export default firebase;