"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeDEmbedding = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let object: THREE.Group;
    let texture: THREE.Texture | null = null;
    let objLoaded = false;
    let texLoaded = false;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20);
    camera.position.set(-1.1233, -0.5109, 1.169);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 5;
    controls.addEventListener("change", render);
    controls.target.set(-0.5087, -1.1235, -0.1674);
    controls.update();

    scene.add(new THREE.AmbientLight(0xffffff));

    const pointLight = new THREE.PointLight(0xffffff, 15);
    camera.add(pointLight);
    scene.add(camera);

    const textureLoader = new THREE.TextureLoader();
    texture = textureLoader.load(
      "/services/threeD/doordash/doordashscan.png",
      () => {
        texLoaded = true;
        checkIfDone();
      }
    );
    texture.colorSpace = THREE.SRGBColorSpace;

    const loader = new OBJLoader();
    loader.load(
      "/services/threeD/doordash/doordashscan.obj",
      (obj) => {
        object = obj;
        object.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            const mesh = child;
            mesh.geometry.computeBoundingBox();
            const box = mesh.geometry.boundingBox;
            const center = new THREE.Vector3();
            box?.getCenter(center);
            mesh.geometry.translate(-center.x, -center.y, -center.z);
          }
        });

        object.position.set(0, 0, 0);
        object.rotation.x = -Math.PI / 2;
        objLoaded = true;
        checkIfDone();
      },
      undefined,
      (error) => console.error("Error loading OBJ:", error)
    );

    function checkIfDone() {
      if (objLoaded && texLoaded && object) {
        object.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) child.material.map = texture;
        });
        object.position.y = -0.95;
        object.scale.setScalar(0.01);
        scene.add(object);
        render();
        setLoading(false);
      }
    }

    function onWindowResize() {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", onWindowResize);

    return () => {
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "300px",
      }}
    >
      {loading && (
        <div
          className="absolute top-[50%] left-[50%] z-10 p-3 rounded-lg bg-[var(--primary)]"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <p className="font-bold text-black">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ThreeDEmbedding;
