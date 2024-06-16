
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

    //Função para fazer a entrada de dados mais simples com a tecla 'ENTER'
    function enter(event) {
        const tecla = event.key;

        if (tecla === 'Enter') {
            enviar();
        }
    }
     function totalDespesas () {
        let sal = document.getElementById('sal').value;

            let total = "<hr> O total de suas despesas é + (var despesas) + e somando com sua renda o que sobra " + "R$" + (sal - 1000);
    
            /*coloquei o Número 1000 de exemplo pq tenho que
            fazer a função para somar o total da array*/

            document.getElementById('total').innerHTML = total;

     }
            
