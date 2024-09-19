
async function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tempoInput = document.getElementById('tempo');
    const tarefasList = document.getElementById('tarefas');

    const tarefa = tarefaInput.value;
    const tempo = tempoInput.value;

    const promessaTarefa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${tarefa} concluída!!!`);
        }, tempo * 1000);
    });
    const resultado = await promessaTarefa;
    const li = document.createElement('li');
    li.textContent = resultado;
    tarefasList.appendChild(li);
    tarefaInput.value = '';
    tempoInput.value = '';
}