function agregarTarea() {
    const tareaInput = document.getElementById('tareaInput');
    const tarea = tareaInput.value;
  
    if (tarea.trim() !== '') {
      const listaTareas = document.getElementById('listaTareas');
      const nuevaTarea = document.createElement('li');
      nuevaTarea.className = 'list-group-item d-flex justify-content-between align-items-center';
      nuevaTarea.innerHTML = `
        ${tarea}
        <button class="btn btn-danger" type="button" onclick="eliminarTarea(this)">Eliminar</button>
      `;
      listaTareas.appendChild(nuevaTarea);
      tareaInput.value = '';
    }
  }
  
  function eliminarTarea(btn) {
    btn.parentElement.remove();
  }
  