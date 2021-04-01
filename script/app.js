var firebaseConfig = {
  apiKey: "AIzaSyC5e9X-jBFUzTpHmfMabXCF1dO484x-jMw",
  authDomain: "colegiomaicke.firebaseapp.com",
  projectId: "colegiomaicke",
  storageBucket: "colegiomaicke.appspot.com",
  messagingSenderId: "380040372664",
  appId: "1:380040372664:web:edef515da6a8a492a32f4d",
  measurementId: "G-E8PJBN7SEM"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const turma = "TurmaA";
let db = firebase.firestore();

let auth = firebase.auth();

function createAccount() {
  let email = document.getElementById("cadastraremail").value;
  let senha = document.getElementById("cadastrarsenha").value;
  auth.createUserWithEmailAndPassword(email, senha)
    .then(user => {
      alert("conta cadastrada");
      location.href = "index.html";
    }).catch(error => {
      alert(error);
    })
}

function login() {
  let login = document.getElementById("ipt1").value;
  let senha = document.getElementById("ipt2").value;
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      auth.signInWithEmailAndPassword(login, senha)
        .then(loggedUser => {
          alert("Login feito com sucesso");
          location.href = "https://jogo-da-velha-il6kj8ix6-maicke-andrew.vercel.app/";
        }).catch(error => {
          alert(error)
        }).catch(error => {
          alert(error)
        })
    })
}

function logout() {
  auth.signOut().then(obs => {
    alert("deslogado")
  }).catch(erro => {
    alert(erro)
  })
}

function whenLogout() {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user)
      setTimeout(logout, 1000000);
    } else {
      auth.onAuthStateChanged(user => { console.log(user) })
    }
  })
}
whenLogout();
