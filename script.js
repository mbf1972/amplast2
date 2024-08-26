// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cubeCanvas'), antialias: true, alpha: true });
///////
const canvasWidth = 500;
const canvasHeight = 500; // Modifier la hauteur selon vos besoins
renderer.setSize(window.innerWidth,  window.innerHeight);
//renderer.setSize(window.innerWidth, window.innerHeight);

// Modifier la couleur d'arrière-plan du rendu
renderer.setClearColor(0x000000, 0); // Fond transparent
// Charger les textures
const loader = new THREE.TextureLoader();
const materials = [
    new THREE.MeshBasicMaterial({ map: loader.load('imj/5.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('imj/8.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('imj/pipo.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('imj/tbor.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('imj/polytl2.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('imj/culotcoin.png') }),
];

// Créer le cube avec les textures
const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
// Positionner la caméra
camera.position.z = 3;

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
// Démarrer l'animation
animate();
// Fonction pour mettre à jour la taille du canevas en réponse à un redimensionnement de la fenêtre
function updateCanvasSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

// Adapter la scène à la taille de la fenêtre
window.addEventListener('resize', updateCanvasSize);

// Appel initial pour configurer la taille du canevas
updateCanvasSize();


