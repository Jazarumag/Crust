import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Configuración usando variables de entorno de Vite
const firebaseConfig = {
  apiKey: "AIzaSyA8eg4oMLOqc9qWcRPQbrEbxdTpNQX3inM",
  authDomain: "crust-f80de.firebaseapp.com",
  databaseURL: "https://crust-f80de-default-rtdb.firebaseio.com",
  projectId: "crust-f80de",
  storageBucket: "crust-f80de.firebasestorage.app",
  messagingSenderId: "1023564855250",
  appId: "1:1023564855250:web:3ce238f9c7725755733a0b"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
