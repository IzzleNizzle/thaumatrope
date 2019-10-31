/*
    Bitcoin Block ThreeJS -> https://www.youtube.com/watch?v=X7ClQDZQfwU
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

let scene, camera, renderer;

document.addEventListener("DOMContentLoaded", function () {
    initializeScene()

    // Adding ambient lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))

    // Left point light
    const pointLightLeft = new THREE.PointLight(0xff4422, 1)
    pointLightLeft.position.set(-1, -1, 3)
    scene.add(pointLightLeft)

    // Right point light
    const pointLightRight = new THREE.PointLight(0x44ff88, 1)
    pointLightRight.position.set(1, 2, 3)
    scene.add(pointLightRight)

    // Top point light
    const pointLightTop = new THREE.PointLight(0xdd3311, 1)
    pointLightTop.position.set(0, 3, 2)
    scene.add(pointLightTop)

    THREE.ImageUtils.crossOrigin = '';
    // IMPORTANT: This next line defines the texture of your coin. I didn't include the Minecraft texture (for copyright reasons) You should replace the url inside '.load(...)' with the path to your own image.
    const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/pkellz/devsage/master/ThreeJS/MinecraftBlock/devsage.jpg");
    const texture2 = new THREE.TextureLoader().load("https://doc-0o-44-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/b8mi0f2k6b1ulkvre2s819u07a6m03t9/1572494400000/03184819079077238248/*/1s43i0qq-2uNSstcMeQx0Y1Q2RaLlznfd");

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.7,
        roughness: 0.3,
    })
    const material2 = new THREE.MeshStandardMaterial({
        map: texture2,
        metalness: 0.7,
        roughness: 0.3,
    })

    var geometry = new THREE.CylinderGeometry(1, 1, 0.05, 100);
    const mesh = new THREE.Mesh(geometry, material)

    var geometry2 = new THREE.CylinderGeometry(1, 1, 0.15, 100);
    const mesh2 = new THREE.Mesh(geometry2, material2)

    scene.add(mesh)
    scene.add(mesh2)
    camera.position.set(0, 0, 7)
    console.log(mesh)

    mesh.rotation.x = 2
    mesh.rotation.y = 1.5

    mesh2.position.x = 2
    mesh2.rotation.x = 2
    mesh2.rotation.y = 1.5

    function animate() {
        mesh.rotation.x += 0.01
        mesh2.rotation.x += 0.01
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }

    animate()
})

function initializeScene() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    scene.background = new THREE.Color(0x000000);
}