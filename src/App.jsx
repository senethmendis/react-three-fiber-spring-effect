import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Leva, useControls } from "leva";
import Model2 from "./Model2";

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Model rotation={[0, 0, 0]} position={[0, 0, 0]} scale={0.003} />
      </PresentationControls>
      {/* <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={3}
        far={4}
      /> */}
      <Environment preset="city" />
    </Canvas>
  );
};

export default App;
