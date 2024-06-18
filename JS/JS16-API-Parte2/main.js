// busca cep
let cep = document.querySelector('#cep');
let message = document.querySelector('#errormessage');
let rua =  document.querySelector('#rua');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#uf');
// anotações - (onfocusout) é uma função que identifica quando o usuario clica fora do campo de input 
// async é para fazer vários processamentos de informações/ executar funções multiplas 
// try -- trata informações quando retornadas com sucesso
// catch -- trata informações quando retornadas com erro 
// test - faz a validação do valor com o regex 
// throw -- é como se fosse lançar/trata mensagem de erro
//await -- aguarda a consulta ser feita na API para continuar com o fluxo do codigo
// json -- trasnforma um objeto em JSON 
// stringfy -- 
cep, addEventListener('focusout', async () => {
// sabemos que a API pode retornar sucesso(try) e erro(catch)
try{
    const onlyNumbers = /^[0-9]+$/;
    const cepValid = /^[0-9]{8}$/;

    if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value))  // value verifica se tem apenas numeros e depois verifica se o cep é valido
    {
     console.log("CEP invalido")
     throw {cep_error: 'CEP invalido'}
    }

    let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

    console.log(retornoAPI)

    if(!retornoAPI.ok){
        throw await retornoAPI.json();
    }

    let response = await retornoAPI.json();

    console.log(response)
    cep.value = response.cep;
    rua.value = response.logradouro;
    complemento.value = response.complemento;
    bairro.value = response.bairro;
    cidade.value = response.localidade;
    estado.value = response.uf;

}catch (error) {
    if (error?.cep_error) {
        message.textContent = error.cep_error;
        setTimeout(() => {
            message.textContent = '';
        }, 5000);
    }
    console.log(error);
}
})
























