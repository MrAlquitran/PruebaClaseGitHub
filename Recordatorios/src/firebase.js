import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
        apiKey: "AIzaSyAMCN2CM8lKY75F8rFPJEyM19fdl-N4o5s",
        authDomain: "recordatoriosvue-59a34.firebaseapp.com",
        projectId: "recordatoriosvue-59a34",
        storageBucket: "recordatoriosvue-59a34.firebasestorage.app",
        messagingSenderId: "720871472358",
        appId: "1:720871472358:web:f94feccd808513bd4c4f27"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const Recordatorios = collection(db, 'Recordatorios');
