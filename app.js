// Configuración de Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtén referencias a los servicios de Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// Elementos del DOM
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

// Función para iniciar sesión
async function login() {
  try {
    await auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value);
    emailInput.value = '';
    passwordInput.value = '';
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
  }
}

// Función para registrarse
async function signup() {
  try {
    await auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
    emailInput.value = '';
    passwordInput.value = '';
  } catch (error) {
    console.error("Error en el registro:", error);
  }
}

// Función para cerrar sesión
async function logout() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
}
