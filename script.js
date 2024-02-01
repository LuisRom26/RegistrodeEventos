document.getElementById('eventForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var user = document.querySelector('#User').value;
    var events = document.querySelector('#Event').value;
    var message = document.querySelector('#Comment').value;
    var status = document.querySelector('#Status').checked ? 'Activado' : 'Desactivado';
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + user + '</td>' +
      '<td>' + events + '</td>' +
      '<td>' + message + '</td>' +
      '<td>' + status + '</td>' +
      '<td><button class="deleteButton">Eliminar</button></td>';
    document.querySelector('#dataTable tbody').appendChild(newRow);
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('deleteButton')) {
        console.log('Columna eliminada:', getRowData(event.target))
        deleteRow(event.target);
      }
    });
    function deleteRow(button) {
      var row = button.parentNode.parentNode;
      if (row && row.parentNode) {
        row.parentNode.removeChild(row);
      }
    }
    function getRowData(button) {
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll('td');
    var rowData = {};
    for (var i = 0; i < cells.length; i++) {
      var header = document.querySelector('#dataTable th:nth-child(' + (i + 1) + ')').innerText;
      rowData[header] = cells[i].innerText;
    }
    return rowData;
  }
    document.querySelector('#User').value = '';
    document.querySelector('#Event').value = '';
    document.querySelector('#Comment').value = '';
    document.querySelector('#Status').checked = true;
    console.log('Columna creada:', { user, events, status, message })
  });
