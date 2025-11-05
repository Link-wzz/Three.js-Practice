import './style.css'

import * as THREE from 'three'  //引入threejs 库
import { addDefaultMeshes } from './addDefaultMeshes';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//移动camera
camera.position.set(0,0,5)

//创建meshes对象Object,用于储存所有的meshes
const meshes = {};
const clock = new THREE.Clock();
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
  meshes.three = addDefaultMeshes();
  meshes.four = addDefaultMeshes();
  meshes.five = addDefaultMeshes();

  

  scene.add(meshes.default)
  for (let i in meshes){
    scene.add(meshes[i])
  }
  // randomWay("default")
  animate()
}

function animate(){
  // meshes.default.position.x +=0.1;
  meshes.default.position.x = Math.sin(clock.getElapsedTime())
  meshes.copy.position.y = Math.sin(clock.getElapsedTime())
  meshes.three.position.set(Math.cos(clock.getElapsedTime()),Math.sin(clock.getElapsedTime()),0);
  meshes.four.position.y = Math.sin(clock.getElapsedTime())
  meshes.five.position.y = Math.sin(clock.getElapsedTime())


  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
}
    