import "./styles.css";
import * as THREE from 'three';

const scale = window.innerWidth / 1920;
let theta = [0, 2 * Math.PI / 3, 4 * Math.PI / 3];

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)
// scene
const scene = new THREE.Scene();

const grp = new THREE.Group();
scene.add(grp);

const ball0 = new THREE.Mesh(new THREE.SphereGeometry(scale, 40, 40), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const ball1 = new THREE.Mesh(new THREE.SphereGeometry(scale, 40, 40), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
const ball2 = new THREE.Mesh(new THREE.SphereGeometry(scale, 40, 40), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
grp.add(ball0, ball1, ball2);


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
scene.add(camera);
camera.position.z = 10;
const animate = () => {
    requestAnimationFrame(animate);

    ball0.position.set(2 * scale * Math.cos(theta[0]), 2 * scale * Math.sin(theta[0]), 0);
    ball0.scale.x = 1 + Math.pow(Math.sin(theta[0]), 2);
    ball0.scale.y = 1 + Math.pow(Math.cos(theta[0]), 2);
    ball0.rotateZ(Math.PI / 90);

    ball1.position.set(2 * scale * Math.cos(theta[1]), 2 * scale * Math.sin(theta[1]), 0);
    ball1.scale.x = 1 + Math.pow(Math.cos(theta[1]), 2);
    ball1.scale.y = 1 + Math.pow(Math.sin(theta[1]), 2);
    ball1.rotateZ(Math.PI / 90);

    ball2.position.set(2 * scale * Math.cos(theta[2]), 2 * scale * Math.sin(theta[2]), 0);
    ball2.scale.x = 1 + Math.pow(Math.cos(theta[2]), 2);
    ball2.scale.y = 1 + Math.pow(Math.sin(theta[2]), 2);
    ball2.rotateZ(Math.PI / 90);


    theta = theta.map(t => t + Math.PI / 90);

    renderer.render(scene, camera);
}
animate();