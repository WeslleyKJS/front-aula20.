

function pegaDados() {
    

    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const idade = document.querySelector("#idade");
    const resultado = document.querySelector(".resultado");
    const erro  = document.querySelector(".erro");


    const nomeValor = nome.value 
    const sobrenomeValor = sobrenome.value 
    const idadeValor = idade.value 

    if( nomeValor === ""){
        erro.textContent = "O Campo não pode ficar vazio!"
        nome.style.borderColor = "red"
        return
    }

    if(idadeValor ===  ""){
       document.querySelector(".erro-idade").textContent = "Campo Obrigatório!"
       idade.style.borderColor = "red"
    }else if( idadeValor < 0){
        document.querySelector(".erro-idade").textContent = "Não pode ser menor que 0";
        idade.style.borderColor = "red"
    }

    resultado.innerHTML =  `<p> Nome : ${nomeValor}</p>
                            <p> Sobrenome : ${sobrenomeValor}</p>
                            <p> Idade : ${idadeValor}</p>
    `;
}