function entrar(){
    let login = document.querySelector("#login");
    let senha = document.querySelector("#senha");
  
    let listaUsuario = [];
  
    let validaUsuario = {
    login: '',
    senha: ''
    }
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));

    listaUsuario.forEach((item) => {
        if(login.value == item.login && senha.value == item.senha){
            validaUsuario = {
                login: item.login,
                senha: item.senha
            }
        }
            
        })
        if(login.value == validaUsuario.login && senha.value == validaUsuario.senha){
            let mathRandom = Math.random().toString(16).substring(2)
            let token = mathRandom + mathRandom
            localStorage.setItem('token', token)
            localStorage.setItem('userLogado', JSON.stringify(validaUsuario))
            alert("Seja bem vindo!");
            window.location.href = 'logado.html'
        } else(
            alert("Usuário ou senha incorretos")
        )
}
