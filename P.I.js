
//Definindo os Bancos de Dados
var banco = [];

//Criando função com o laço de repetição
function mostrar() {
    var alterar = [];
    for (var i = 0; i < banco.length; i++) {
        alterar += "Gasto " + (i + 1) + ": " + banco[i].gasto + "<br> Custo " + (i + 1) + ": " + banco[i].custo 
         + "    <button onclick=\"deletar(" + i + ")\">Remover</button><br>";
    }
    document.getElementById("resposta").innerHTML = alterar;
}
    //Criando a Função para Adicionar na Array
    function enviar() {
     //Enviando os conteúdo para o Banco de Dados
        let gasto = document.getElementById('gasto').value;
        let custo = document.getElementById('custo').value;
        console.log(gasto);
        console.log(custo);
        banco.push({ gasto: gasto , custo: custo });
        mostrar();
         gasto.value = '';
        custo.value = '';
    }

    //Remover tarefa a array
    function deletar(i) {
        // Usando splice para remover a tarefa
        banco.splice(i, 1);
        mostrar();
    }





