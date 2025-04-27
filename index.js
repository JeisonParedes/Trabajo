// Mostrar fecha actual
document.addEventListener('DOMContentLoaded', () => {
    const fechaElemento = document.getElementById('fecha');
    const fechaActual = new Date().toLocaleDateString('es-ES', {
        day: '2-digit', month: '2-digit', year: 'numeric'
    });
    fechaElemento.textContent = fechaActual;
});

// Robots
let robots = [];
let robotId = 0;

function agregarRobot() {
    const nombre = document.getElementById('nombreRobot').value.trim();
    const tipo = document.getElementById('tipoRobot').value.trim();

    if (nombre && tipo) {
        robots.push({ id: robotId++, nombre, tipo, estado: 'en desarrollo' });
        listarRobots();
        document.getElementById('nombreRobot').value = '';
        document.getElementById('tipoRobot').value = '';
    }
}

function listarRobots() {
    const lista = document.getElementById('listaRobots');
    lista.innerHTML = '';

    robots.forEach(robot => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span>Robot ${robot.nombre} - Tipo: ${robot.tipo} - Estado: ${robot.estado}</span>
            <div class="actions">
                <button onclick="editarRobot(${robot.id})" title="Editar">✏️</button>
                <button onclick="eliminarRobot(${robot.id})" title="Eliminar">🗑️</button>
                <button onclick="cambiarEstadoRobot(${robot.id})" title="Cambiar Estado">🔄</button>
            </div>
        `;
        lista.appendChild(card);
    });
}

function editarRobot(id) {
    const robot = robots.find(r => r.id === id);
    const nuevoNombre = prompt('Nuevo nombre del robot:', robot.nombre);
    const nuevoTipo = prompt('Nuevo tipo del robot:', robot.tipo);

    if (nuevoNombre && nuevoTipo) {
        robot.nombre = nuevoNombre.trim();
        robot.tipo = nuevoTipo.trim();
        listarRobots();
    }
}

function eliminarRobot(id) {
    robots = robots.filter(r => r.id !== id);
    listarRobots();
}

function cambiarEstadoRobot(id) {
    const robot = robots.find(r => r.id === id);
    const nuevoEstado = prompt('Nuevo estado (en desarrollo, probado, desplegado):', robot.estado);

    if (nuevoEstado && ['en desarrollo', 'probado', 'desplegado'].includes(nuevoEstado.toLowerCase())) {
        robot.estado = nuevoEstado.toLowerCase();
        listarRobots();
    } else {
        alert('Estado inválido.');
    }
}

// Ingenieros
let ingenieros = [];
let ingenieroId = 0;

function agregarIngeniero() {
    const nombre = document.getElementById('nombreIngeniero').value.trim();
    const especialidad = document.getElementById('especialidadIngeniero').value.trim();

    if (nombre && especialidad) {
        ingenieros.push({ id: ingenieroId++, nombre, especialidad, estado: 'activo' });
        listarIngenieros();
        document.getElementById('nombreIngeniero').value = '';
        document.getElementById('especialidadIngeniero').value = '';
    }
}

function listarIngenieros() {
    const lista = document.getElementById('listaIngenieros');
    lista.innerHTML = '';

    ingenieros.forEach(inge => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span>Ingeniero ${inge.nombre} - Especialidad: ${inge.especialidad} - Estado: ${inge.estado}</span>
            <div class="actions">
                <button onclick="editarIngeniero(${inge.id})" title="Editar">✏️</button>
                <button onclick="eliminarIngeniero(${inge.id})" title="Eliminar">🗑️</button>
                <button onclick="cambiarEstadoIngeniero(${inge.id})" title="Cambiar Estado">🔄</button>
            </div>
        `;
        lista.appendChild(card);
    });
}

function editarIngeniero(id) {
    const inge = ingenieros.find(i => i.id === id);
    const nuevoNombre = prompt('Nuevo nombre del ingeniero:', inge.nombre);
    const nuevaEspecialidad = prompt('Nueva especialidad del ingeniero:', inge.especialidad);

    if (nuevoNombre && nuevaEspecialidad) {
        inge.nombre = nuevoNombre.trim();
        inge.especialidad = nuevaEspecialidad.trim();
        listarIngenieros();
    }
}

function eliminarIngeniero(id) {
    ingenieros = ingenieros.filter(i => i.id !== id);
    listarIngenieros();
}

function cambiarEstadoIngeniero(id) {
    const inge = ingenieros.find(i => i.id === id);
    const nuevoEstado = prompt('Nuevo estado (activo, asignado, baja):', inge.estado);

    if (nuevoEstado && ['activo', 'asignado', 'baja'].includes(nuevoEstado.toLowerCase())) {
        inge.estado = nuevoEstado.toLowerCase();
        listarIngenieros();
    } else {
        alert('Estado inválido.');
    }
}
