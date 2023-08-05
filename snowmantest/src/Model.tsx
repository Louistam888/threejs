import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useRef } from "react";


const Model = () => {
  const gltf = useGLTF("../public/data/snowman.glb");
  const modelRef = useRef();
  //   const red = new THREE.MeshLambertMaterial({ color: "red" });

  useFrame(() => {
    // Update position, rotation, or scale of the modelRef.current here
    modelRef.current!.rotation.x += 0.01; // Rotates the model around the Y-axis
    modelRef.current!.rotation.z += 0.01;
    // You can add more animations or customize this according to your needs
  });

  return (
    <>
      <OrbitControls />
      <Environment background={true} files="../public/data/goegap_1k.hdr" />
      <mesh ref={modelRef}>
        {/* <boxGeometry args={[2, 2, 1]} /> */}
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
};

export default Model;
