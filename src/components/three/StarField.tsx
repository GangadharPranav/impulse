"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "@/hooks/useScrollProgress";

export default function StarField({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollProgress = useScrollStore((s) => s.progress);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#22B3B8");
    const lightCyan = new THREE.Color("#3FE3E8");
    const white = new THREE.Color("#FFFFFF");
    const deepTeal = new THREE.Color("#08747E");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread across a cylindrical volume
      const radius = 8 + Math.random() * 24;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 35;

      pos[i3] = Math.cos(theta) * radius;
      pos[i3 + 1] = y;
      pos[i3 + 2] = (Math.random() - 0.5) * 20 - 4;

      // Color variation
      const r = Math.random();
      const c = r > 0.6 ? cyan : r > 0.35 ? lightCyan : r > 0.15 ? deepTeal : white;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Gentle ambient drift + scroll responsiveness
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      scrollProgress * 0.4,
      0.05
    );
    // Move along z as user scrolls to create warp / drift sensation
    pointsRef.current.position.z = THREE.MathUtils.lerp(
      pointsRef.current.position.z,
      -scrollProgress * 6,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
