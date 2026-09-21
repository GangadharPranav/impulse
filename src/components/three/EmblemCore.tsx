"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "@/hooks/useScrollProgress";

export default function EmblemCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const shardGroupRef = useRef<THREE.Group>(null);

  const scrollProgress = useScrollStore((s) => s.progress);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Phase 1 (Hero: 0 - 0.2): Centered slightly to the right for hero layout
    // Phase 2 (0.2 - 0.5): Moves to center and expands
    // Phase 3 (0.5 - 0.8): Shards disperse outwards
    // Phase 4 (0.8 - 1.0): Reconverges with high energy

    const targetX = scrollProgress < 0.25 
      ? 2.2 * (1 - scrollProgress * 2) 
      : Math.sin(scrollProgress * Math.PI * 2) * 1.5;

    const targetY = scrollProgress < 0.25
      ? 0.2
      : Math.cos(scrollProgress * Math.PI) * 0.8;

    const targetZ = scrollProgress < 0.25
      ? 0
      : -1 - scrollProgress * 3;

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.06);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.06);

    // Continuous slow vertical-axis rotation (user requested rotating around vertical axis)
    groupRef.current.rotation.y += delta * 0.45;

    // Rings counter-rotate for gyroscopic intellect aesthetic
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35;
      ring1Ref.current.rotation.z += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * -0.4;
      ring2Ref.current.rotation.x += delta * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.5;
      ring3Ref.current.rotation.y += delta * 0.25;
    }

    // Core pulsing emissive breath
    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.5) * 0.08;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Shard separation based on scroll
    if (shardGroupRef.current) {
      const dispersion = Math.max(0, (scrollProgress - 0.15) * 3.5);
      shardGroupRef.current.children.forEach((child, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 1.4 + dispersion * 1.8;
        child.position.x = THREE.MathUtils.lerp(child.position.x, Math.cos(angle) * radius, 0.08);
        child.position.y = THREE.MathUtils.lerp(child.position.y, Math.sin(angle) * radius, 0.08);
        child.position.z = THREE.MathUtils.lerp(child.position.z, Math.sin(angle * 2 + state.clock.elapsedTime) * 0.4, 0.08);
        child.rotation.z += delta * (i % 2 === 0 ? 0.6 : -0.6);
        child.rotation.x += delta * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef} position={[2.2, 0.2, 0]}>
      {/* Central Luminary Core — representing the light of intellect & strategy */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.7, 2]} />
        <meshStandardMaterial
          color="#22B3B8"
          emissive="#22B3B8"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Internal Wireframe Geodesic Cage */}
      <mesh>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial
          color="#3FE3E8"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Concentric Gyro Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.2, 0.025, 16, 80]} />
        <meshStandardMaterial
          color="#22B3B8"
          emissive="#08747E"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.35, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#3FE3E8"
          emissive="#22B3B8"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[1.5, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#E8EEF0"
          emissive="#22B3B8"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* 6 Kinetic Shards (Puzzle / Logic Fragments) */}
      <group ref={shardGroupRef}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0]}
            >
              <octahedronGeometry args={[0.22, 0]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#22B3B8" : "#3FE3E8"}
                emissive={i % 2 === 0 ? "#033744" : "#22B3B8"}
                emissiveIntensity={0.7}
                roughness={0.25}
                metalness={0.85}
              />
            </mesh>
          );
        })}
      </group>

      {/* Point lights on the emblem */}
      <pointLight color="#22B3B8" intensity={3.5} distance={7} decay={2} />
      <pointLight color="#3FE3E8" intensity={1.5} distance={4} decay={2} />
    </group>
  );
}
