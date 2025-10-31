import * as THREE from 'three'  //引入threejs 库
import { addDefaultMeshes } from './addDefaultMeshes';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//移动camera
camera.position.set(0,0,5)

//创建meshes对象Object,用于储存所有的meshes
const meshes = {};

const renderer = new THREE.WebGLRenderer({antialias: true});
//antialias 为抗锯齿选项
init()

function init(){

  // 确定渲染的真实屏幕尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //add our meshes to the container then add to scene
  meshes.default = addDefaultMeshes();
  meshes.copy = addDefaultMeshes();
  scene.add(meshes.default)
  // randomWay("default")
  animate()
}

function animate(){
  // meshes.default.position.x +=0.1;
  meshes.default.scale.x +=0.1;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
}
    
// function randomWay(meshInstance){cont
//  const n = Math.floor(Math.random()*4);
//  let direction;
//  let d = true;
//  if(n == 0){
//   direction = x;
//  }else if(n==1){
//   direction = y;
//  }else if(n ==2){
//   direction = x;
//   d = false
//  }else if(n==3){
//   d = false
//  }

//  if(d == true){
//   meshes.meshInstance.position.direction +=0.1;

//  }else{
//   meshes.meshInstance.position.direction -=0.1;
//  }
// }