// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXUJNrU-vBPvhcBZsbvLF-3fl-z_3jcyU",
    authDomain: "pizzarelabst1.firebaseapp.com",
    databaseURL: "https://pizzarelabst1.firebaseio.com",
    projectId: "pizzarelabst1",
    storageBucket: "pizzarelabst1.appspot.com",
    messagingSenderId: "456340325246",
    appId: "1:456340325246:web:6ef6a0ae174f08ff87292f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var txtuser = document.getElementById('usuario');
var txtpass = document.getElementById('contraseña');
var txtmail = document.getElementById('correo');
var txttel = document.getElementById('celular');

var listaUser = document.getElementById('lista');

function agregarDatos() {
    db.collection("usuarios").add({
        usuario: txtuser.value,
        contraseña: txtpass.value,
        correo: txtmail.value,
        celular: txttel.value
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("REGISTRO EXITOSO", docRef.id)
            limpiarDatos()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
function limpiarDatos() {
    txtuser.value = "";
    txtpass.value = "";
    txtmail.value = "";
    txttel.value = "";
}
function leerDatos() {
    listaUser.innerHTML = "";
    db.collection("usuarios")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                listaUser.innerHTML += `
                <tr>
                    <td>${doc.data().usuario}</td>
                    <td>${doc.data().correo}</td>
                    <td>@${doc.data().celular}</td>
                </tr>
                `;
            });
        })
        .catch(function (error) {
            console.log("Error : ", error);
        });
}