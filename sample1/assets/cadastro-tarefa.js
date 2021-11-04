$(document).ready(function () {
  $('#form-cadastro-tarefa').submit(function (e) {
    let tarefa = $('#tarefa').val()
    let data = $('#data').val()

    if (!tarefa || !data) {
      $('#alert-cadastro-tarefa-erro').show()
      return false
    }

    //salvaTarefaEmLocalStorage(tarefa, data)

    e.preventDefault()
  })
  $('.btn-close').click(function () {
    $(this).parent().css('display', 'none')
  })

  $('.date').mask('00/00/0000')
})

function salvaTarefaEmLocalStorage(tarefa, data) {
  const objetoTarefaParaSalvar = {
    id: new Date().getTime(),
    tarefa,
    data,
    status: 'PENDENTE'
  }

  let tarefasCadastradasEmLocalStorage = JSON.parse(
    localStorage.getItem('tarefas-todo-list')
  )

  if (
    tarefasCadastradasEmLocalStorage &&
    tarefasCadastradasEmLocalStorage.length
  ) {
    tarefasCadastradasEmLocalStorage.push(objetoTarefaParaSalvar)

    localStorage.setItem(
      'tarefas-todo-list',
      JSON.stringify(tarefasCadastradasEmLocalStorage)
    )
  } else {
    localStorage.setItem(
      'tarefas-todo-list',
      JSON.stringify([objetoTarefaParaSalvar])
    )
  }
  $('#alert-cadastro-tarefa-sucesso').show()
  $('#tarefa').val('')
  $('#data').val('')
}
