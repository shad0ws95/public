const form = document.getElementById("form");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const nascimento = document.getElementById("nascimento");
const nome_mae = document.getElementById("nome_mae");
const sexo = document.getElementById("sexo");
const cep = document.getElementById("cep");
const fixo = document.getElementById("fixo");
const uf = document.getElementById("uf");
const celular = document.getElementById("celular");
const cidade = document.getElementById("cidade");
const login = document.getElementById("login");
const bairro = document.getElementById("bairro");
const senha = document.getElementById("senha");
const rua = document.getElementById("rua");
const conf_senha = document.getElementById("conf_senha");
const numero = document.getElementById("numero");
const complemento = document.getElementById("complemento");

form.addEventListener('submit', (e) =>{
   e.preventDefault();
   validaDados();
})

function validaDados(){
   const nomeValue = nome.value.trim();
   const cpfValue = cpf.value.trim();
   const nascimentoValue = nascimento.value.trim();
   const nome_maeValue = nome_mae.value.trim();
   const sexoValue = sexo.value.trim();
   const cepValue = cep.value.trim();
   const fixoValue = fixo.value.trim();
   const ufValue = uf.value.trim();
   const celularValue = celular.value.trim();
   const cidadeValue = cidade.value.trim();
   const loginValue = login.value.trim();
   const bairroValue = bairro.value.trim();
   const senhaValue = senha.value.trim();
   const ruaValue = rua.value.trim();
   const conf_senhaValue = conf_senha.value.trim();
   const numeroValue = numero.value.trim();
   const complementoValue = complemento.value.trim();
   
   if(nomeValue.length < 15){
    erroDeValidacao(nome, 'O Nome Completo deve conter pelo menos 15 caracteres e no máximo 60.');
    nomeValido = false;
   } else{
    sucessoNaValidacao(nome);
    nomeValido = true;
   }

   if(cpfValue.length === 14){
    sucessoNaValidacao(cpf);
    cpfValido = true;
   } else{
    erroDeValidacao(cpf, 'O CPF deve ter exatamente 11 dígitos numéricos.');
    cpfValido = false;   
    }

   if(nascimentoValue.length != 10){
    erroDeValidacao(nascimento, 'A data de Nascimento deve obedecer o formato DD/MM/AAAA');
    nascimentoValido = false;
   } else{
    sucessoNaValidacao(nascimento);
    nascimentoValido = true;
   }

   if(nome_maeValue.length < 15){
    erroDeValidacao(nome_mae, 'O Nome da mãe deve conter pelo menos 15 caracteres e no máximo 60.');
    nome_maeValido = false;
   } else{
    sucessoNaValidacao(nome_mae);
    nome_maeValido = true;
   }

   if(cepValue.length === 9){
    sucessoNaValidacao(cep);
    cepValido = true;
   } else{
    erroDeValidacao(cep, 'Favor inserir um CEP válido.');
    cepValido = false;
   }

   if(fixoValue.length === 14){
    sucessoNaValidacao(fixo);
    fixoValido = true;
   } else{
    erroDeValidacao(fixo, 'O telefone deve respeitar o formato (12) 1234-5678.');
    fixoValido = false;
   }

   if(ufValue.length != 2){
    erroDeValidacao(uf, 'Favor inserir a sigla do UF Ex: RJ');
    ufValido = false;
   } else{
    sucessoNaValidacao(uf);
    ufValido = true;   
    }

   if(celularValue.length === 15){
    sucessoNaValidacao(celular);
    celularValido = true;
   } else{
    erroDeValidacao(celular, 'O telefone deve respeitar o formato (12) 91234-5678.');
    celularValido = false;
   }

   if(cidadeValue === ""){
    erroDeValidacao(cidade, 'Cidade não pode estar vazio.');
    cidadeValido = false;
   } else{
    sucessoNaValidacao(cidade);
    cidadeValido = true;
   }

   if(loginValue.length !== 6){
    erroDeValidacao(login, 'O Login deve conter exatamente 6 caracteres alfabéticos.');
    loginValido = false;
   } else{
    sucessoNaValidacao(login);
    loginValido = true;
   }

   if(bairroValue === ""){
    erroDeValidacao(bairro, 'Bairro não pode estar vazio.');
    bairroValido = false;
   } else{
    sucessoNaValidacao(bairro);
    bairroValido = true;
   }

   if(ruaValue === ""){
    erroDeValidacao(rua, 'Rua não pode estar vazio.');
    ruaValido = false;
   } else{
    sucessoNaValidacao(rua);
    ruaValido = true;
   }

   if(numeroValue === ""){
    erroDeValidacao(numero, 'Número não pode estar vazio.');
    numeroValido = false;
   } else{
    sucessoNaValidacao(rua);
    numeroValido = true;
   }
 
   if (senhaValue.length < 8){
    erroDeValidacao(senha, "A senha deve conter exatamente 8 caracteres alfabéticos.");
    senhaValido = false;
   } else{
    sucessoNaValidacao(senha);
    senhaValido = true;
   }

   if (conf_senhaValue.length < 8){
    erroDeValidacao(conf_senha, "A confirmação de senha deve ser identica ao campo senha.");
    conf_senhaValido = false;
   } else if (senhaValue !== conf_senhaValue){
    erroDeValidacao(conf_senha, "As senhas não coincidem.");
    conf_senhaValido = false;
   }else{
    sucessoNaValidacao(conf_senha);
    conf_senhaValido = true;
   }

   function erroDeValidacao(input, mensagem){
       const formControle = input.parentElement;
       const small = formControle.querySelector("small");
       small.innerText = mensagem;
       formControle.className = "input-field col s6 form-control erro";
   }

   function sucessoNaValidacao(input){
    const formControle = input.parentElement;
    formControle.className = "input-field col s6 form-control sucesso";
   }
   if (nomeValido && cpfValido && nascimentoValido && nome_maeValido && cepValido && fixoValido && ufValido && celularValido && cidadeValido && loginValido && bairroValido && ruaValido && numeroValido && senhaValido && conf_senhaValido){
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')
        listaUsuario.push({
            nome: nomeValue,
            cpf: cpfValue,
            nascimento: nascimentoValue,
            mae: nome_maeValue,
            sexo: sexoValue,
            cep: cepValue,
            fixo: fixoValue,
            uf: ufValue,
            celular: celularValue,
            cidade: cidadeValue,
            login: loginValue,
            bairro: bairroValue,
            senha: senhaValue,
            rua: ruaValue,
            numero: numeroValue,
            complemento: complementoValue
        })
        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
        alert("Usuário Cadastrado com Sucesso!");
        window.location.href = 'login.html';
    }
}