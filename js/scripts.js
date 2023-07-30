const inicial = document.querySelector("#paginainicial");
const busca = document.querySelector("#paginabusca")
const lupabusca = document.querySelector("#lupabusca");
const lupalimpa = document.querySelector("#lupalimpa");
const botao = document.querySelector(".ativabusca");

function ativabusca(){
   if(inicial.classList.contains('invisivel')){
      inicial.classList.remove('invisivel');
      busca.classList.add('invisivel');
   } else {
      inicial.classList.add('invisivel');
      busca.classList.remove('invisivel');
   }
}

function buscaclick(){
   if(lupalimpa.classList.contains('invisivel')){
      lupalimpa.classList.remove("invisivel");
      lupabusca.classList.add("invisivel");
   } else {
      lupabusca.classList.remove("invisivel");
      lupalimpa.classList.add("invisivel");
   }
}
