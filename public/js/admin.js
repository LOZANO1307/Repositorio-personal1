function entrar() {
    var txtuser = document.getElementById('usuario').value;
    var txtpass = document.getElementById('contraseña').value;
    if(txtuser=="admin" && txtpass=="12345"){
        window.location = "admin.html";
    }else{
        alert("Credenciales incorrectas")
    }
}