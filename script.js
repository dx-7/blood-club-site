// Background music volume control
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  if (music) music.volume = 0.2;
});

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcWYgdLFtiD1M0fNy56OcQD1KhPBZo2vA",
  authDomain: "blood-club-site.firebaseapp.com",
  projectId: "blood-club-site",
  storageBucket: "blood-club-site.appspot.com",
  messagingSenderId: "370791985514",
  appId: "1:370791985514:web:214bf00364a61900ee3513",
  measurementId: "G-32J0YHKC9F"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
function signIn(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Welcome, soul.");
    })
    .catch(err => {
      alert(err.message);
    });
}

// Sign-up
function signUp(event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("A new soul has entered the Blood Club.");
    })
    .catch(err => {
      alert(err.message);
    });
}

// Logout
function signOut() {
  auth.signOut().then(() => {
    alert("You’ve left the Blood Club.");
  });
}

// Handle auth state changes
auth.onAuthStateChanged(user => {
  const authSection = document.getElementById("auth-section");
  const logoutSection = document.getElementById("logout-section");
  const welcome = document.getElementById("welcome-message");

  if (user) {
    if (authSection) authSection.style.display = "none";
    if (logoutSection) logoutSection.style.display = "block";
    if (welcome) welcome.innerText = `Your presence is felt, ${user.email}`;
  } else {
    if (authSection) authSection.style.display = "block";
    if (logoutSection) logoutSection.style.display = "none";
    if (welcome) welcome.innerText = "The shadows are calling...";
  }
});