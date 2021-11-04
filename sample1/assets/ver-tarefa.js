$(document).ready(function () {
  montaTabelaComTarefasDoStorage()
})
function montaTabelaComTarefasDoStorage() {
  const tarefasCadastradasEmLocalStorage = getTarefasCadastradasEmLocalStorage()

  if (tarefasCadastradasEmLocalStorage.length) {
    for (let i = 0; i < tarefasCadastradasEmLocalStorage.length; i++) {
      $('#tbody-tarefas').append(
        '<tr>' +
          '<td>' +
          tarefasCadastradasEmLocalStorage[i].tarefa +
          '</td>' +
          '<td>' +
          tarefasCadastradasEmLocalStorage[i].data +
          '</td>' +
          '<td>' +
          tarefasCadastradasEmLocalStorage[i].status +
          '</td>' +
          '<td>Editar - Excluir</td>' +
          '</tr>'
      )
    }
  } else {
    $('#table-tarefas')
    $('#tbody-tarefas').append('<h2>Não existem tarefas cadastradas</h2>')
  }
}

function getTarefasCadastradasEmLocalStorage() {
  return JSON.parse(localStorage.getItem('tarefas-todo-list')) || []
}
