let scene, camera, renderer;
let geometry, material, mesh;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create an animated background with particles
    geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
        vertices.push(
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000
        );
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    material = new THREE.PointsMaterial({ color:0x00ffee/*0x4a90e2  0x9c27b0  0xe91e63 */, size: 2 });

    mesh = new THREE.Points(geometry, material);
    scene.add(mesh);

    camera.position.z = 1000;

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.002;

    renderer.render(scene, camera);
}

init();
animate();

// Global Variables
// scene, camera, renderer: Core Three.js components for setting up a 3D scene.
// geometry, material, mesh: Define the particle system that makes up the animated background.
// init Function
// The init function sets up the 3D environment:

// Scene Creation:

// scene = new THREE.Scene();
// This creates a container to hold all objects in the 3D world.
// Camera Setup:

// camera = new THREE.PerspectiveCamera(...): Defines a perspective camera with a field of view of 75 degrees, an aspect ratio based on the window's dimensions, and a visible range from 0.1 to 1000 units.
// Renderer Initialization:

// renderer = new THREE.WebGLRenderer(...): Creates a renderer that uses WebGL for rendering.
// The { antialias: true, alpha: true } options enable smoother edges and transparency in the canvas.
// renderer.setSize(...): Sets the canvas size to match the window's dimensions.
// The canvas is added to the DOM using document.getElementById('canvas-container').appendChild(renderer.domElement);.
// Creating Particles:

// Geometry: A BufferGeometry is used to efficiently handle the particle positions.
// vertices: An array of 10,000 random 3D positions in a range of -1000 to 1000 for each axis.
// The vertex data is added to the geometry using geometry.setAttribute(...).
// Material: A PointsMaterial is used to define the visual style of the particles. Here:
// color: 0x4a90e2 sets a blue color.
// size: 2 defines the size of each particle.
// Mesh: A Points object (special for particle systems) is created with the geometry and material and added to the scene.
// Camera Position:

// camera.position.z = 1000; moves the camera back so it can see the particles.
// Window Resize Handling:

// An event listener adjusts the camera's aspect ratio and renderer size when the browser window is resized.
// animate Function
// This function creates a loop for animation:

// Request Animation Frame:

// requestAnimationFrame(animate);: Continuously calls the animate function for smooth updates.
// Rotation Animation:

// mesh.rotation.x += 0.001; and mesh.rotation.y += 0.002;: Gradually rotate the particle system around the x- and y-axes.
// Rendering:

// renderer.render(scene, camera);: Renders the scene from the camera's perspective.
// onWindowResize Function
// Handles responsive resizing:

// Updates the camera's aspect ratio to match the new window dimensions.
// Adjusts the renderer size to fill the resized window.
// Execution
// init(): Sets up the scene.
// animate(): Starts the animation loop.
// Effect
// This code creates a floating, rotating particle field that adjusts to the browser's dimensions, resulting in an animated and responsive 3D background.