// Configuración de los planetas
const planetas = [
    { nombre: 'Mercurio', color: '#A0522D', tamaño: 10, distancia: 70, velocidad: 4.1 },
    { nombre: 'Venus', color: '#DEB887', tamaño: 15, distancia: 100, velocidad: 1.6 },
    { nombre: 'Tierra', color: '#4169E1', tamaño: 16, distancia: 130, velocidad: 1 },
    { nombre: 'Marte', color: '#CD5C5C', tamaño: 12, distancia: 160, velocidad: 0.5 },
    { nombre: 'Júpiter', color: '#DAA520', tamaño: 30, distancia: 200, velocidad: 0.08 },
    { nombre: 'Saturno', color: '#F4A460', tamaño: 25, distancia: 250, velocidad: 0.03 },
    { nombre: 'Urano', color: '#87CEEB', tamaño: 20, distancia: 290, velocidad: 0.01 },
    { nombre: 'Neptuno', color: '#1E90FF', tamaño: 18, distancia: 330, velocidad: 0.006 }
];

const sistemaSolar = document.querySelector('.sistema-solar');
let multiplicadorVelocidad = 1;

// Crear planetas y órbitas
planetas.forEach(planeta => {
    // Crear órbita
    const orbita = document.createElement('div');
    orbita.className = 'orbita';
    orbita.style.width = `${planeta.distancia * 2}px`;
    orbita.style.height = `${planeta.distancia * 2}px`;
    orbita.style.left = `calc(50% - ${planeta.distancia}px)`;
    orbita.style.top = `calc(50% - ${planeta.distancia}px)`;
    sistemaSolar.appendChild(orbita);

    // Crear planeta
    const elementoPlaneta = document.createElement('div');
    elementoPlaneta.className = 'planeta';
    elementoPlaneta.style.width = `${planeta.tamaño}px`;
    elementoPlaneta.style.height = `${planeta.tamaño}px`;
    elementoPlaneta.style.backgroundColor = planeta.color;
    sistemaSolar.appendChild(elementoPlaneta);

    // Animación del planeta
    let angulo = Math.random() * 360;
    function animar() {
        angulo += (planeta.velocidad * multiplicadorVelocidad);
        const radianes = (angulo * Math.PI) / 180;
        const centroX = sistemaSolar.clientWidth / 2;
        const centroY = sistemaSolar.clientHeight / 2;
        
        elementoPlaneta.style.left = `${centroX + Math.cos(radianes) * planeta.distancia - planeta.tamaño / 2}px`;
        elementoPlaneta.style.top = `${centroY + Math.sin(radianes) * planeta.distancia - planeta.tamaño / 2}px`;
        
        requestAnimationFrame(animar);
    }
    animar();
});

// Control de velocidad
const controlVelocidad = document.getElementById('velocidad');
controlVelocidad.addEventListener('input', (e) => {
    multiplicadorVelocidad = parseFloat(e.target.value);
});

