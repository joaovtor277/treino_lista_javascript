const input = document.getElementById('nova-tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista-tarefas');

function adicionarTarefa() {
    const tarefa = input.value;
    if (tarefa !== ""){
        const li = document.createElement('li');
        li.textContent = tarefa;

        li.addEventListener('click', function(){
            li.classList.toggle("concluida")
        });

        const btnRemover = document.createElement('button');
        btnRemover.textContent = "Remover";
        btnRemover.style.marginLeft = "100px"

        btnRemover.addEventListener('click', function(event){
            event.stopPropagation();
            li.remove();
        });

        li.appendChild(btnRemover);

        lista.appendChild(li);
        input.value = "";
    } else {
        alert("digite uma tarefa!");
    }
}

botao.addEventListener('click', adicionarTarefa);