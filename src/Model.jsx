/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: TuppsM (https://sketchfab.com/TuppsM)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hover-bike-the-rocket-8b2e5bfca78e41c791b4e5b5e8c04512
Title: Hover bike - "The Rocket"
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bike/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <group name="TheRocketAnimationfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Camera"
                  position={[-409.529, 76.674, 740.405]}
                  rotation={[0, 0.937, 0.108]}
                  scale={100}
                >
                  <group name="Object_5" />
                </group>
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/scene.gltf");
export default Model;
