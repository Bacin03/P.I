
//Definindo os Bancos de Dados
var gasto_db = [];
var custo_db = [];

//Criando função com o laço de repetição
function mostrar() {
    var alterar = [];
    for (var i = 0; i < gasto_db.length; i++) {
        alterar += "Gasto " + (i + 1) + ": " + gasto_db[i].gasto + "<br> Custo " + (i + 1) + ": " + custo_db[i].custo 
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
        gasto_db.push({ gasto: gasto });
        custo_db.push({custo: custo});
        mostrar();
         gasto.value = '';
        custo.value = '';
    }

    //Remover tarefa a array
    function deletar(i) {
        // Usando splice para remover a tarefa
        gasto_db.splice(i, 1);
        mostrar();
    }





