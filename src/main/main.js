import * as THREE from "three";

// 目标：了解three.js基本内容

// 1,创建场景
const scene = new THREE.Scene();

//2,创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 10);
scene.add(camera);

//添加物体
//创建几何体
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:'#0xffff00'})
//根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
// cube.position.set(0,0,0)
scene.add(cube)

//初始化渲染器
const renderer = new THREE.WebGLRenderer()
//设置渲染的尺寸和大小
renderer.setSize(window.innerWidth,window.innerHeight)
//将webl渲染的canvas内容添加到body
// console.log(renderer)
document.body.appendChild(renderer.domElement)

//使用渲染器，通过相机将场景渲染进来
renderer.render(scene,camera)