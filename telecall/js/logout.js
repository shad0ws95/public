if(localStorage.getItem('token') == null){
    alert("Você precisa estar logado para acessar esta página!")
    window.location.href = 'login.html';
}
function logout(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}