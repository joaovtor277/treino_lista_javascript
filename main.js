const input = document.getElementById('nova-tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista-tarefas');

function adicionarTarefa() {
    const tarefa = input.value;
    if (tarefa !== ""){
        const li = document.createElement('li');
        li.textContent = tarefa;
        lista.appendChild(li);
        input.value = "";
    } else {
        alert("digite uma tarefa!");
    }
}

botao.addEventListener('click', adicionarTarefa);