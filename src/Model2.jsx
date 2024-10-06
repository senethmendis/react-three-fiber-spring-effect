import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

const Model2 = () => {
  const { viewport } = useThree();

  const ref = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.width) / 2;
    ref.current.position.set(x, y, 0);
    // ref.current.position.set(x,y,0)
  });

  return (
    <mesh ref={ref}>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshNormalMaterial attach={"material"} />
    </mesh>
  );
};

export default Model2;
