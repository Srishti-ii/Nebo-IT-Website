import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ mouse }: { mouse: React.MutableRefObject<THREE.Vector2> }) => {
  const points = useMemo(() => {
    const count = window.innerWidth < 768 ? 1200 : 3000;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.05;
    ref.current.rotation.y += delta * 0.075;

    const targetX = mouse.current.x * 0.5;
    const targetY = mouse.current.y * 0.5;

    ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.02}
          opacity={0.7}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// --- UPDATED COMPONENT: Minimalist Structural Cage ---
const StructuralCage = ({ mouse }: { mouse: React.MutableRefObject<THREE.Vector2> }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const outerFrameRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const targetX = mouse.current.x * 0.2;
    const targetY = mouse.current.y * 0.2;

    // Smooth group tilt based on mouse
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;

    // Constant, deliberate rotation
    groupRef.current.rotation.y += delta * 0.15;

    // Counter-rotate the outer frame for subtle complexity
    if (outerFrameRef.current) {
      outerFrameRef.current.rotation.y -= delta * 0.05;
      outerFrameRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>

      {/* Outer Structural Wireframe Box */}
      <mesh ref={outerFrameRef}>
        <boxGeometry args={[2, 2.8, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.4} // Increased opacity for better visibility
        />
      </mesh>

      {/* Corner Data Nodes (Structural joints) */}
      {[-1, 1].map((x) =>
        [-1.4, 1.4].map((y) =>
          [-1, 1].map((z) => (
            <mesh key={`${x}-${y}-${z}`} position={[x, y, z]}>
              <boxGeometry args={[0.05, 0.05, 0.05]} />
              <meshBasicMaterial color="#22d3ee" />
            </mesh>
          ))
        )
      )}

    </group>
  );
};

const BackgroundContent = ({ mouse }: { mouse: React.MutableRefObject<THREE.Vector2> }) => {
  return (
    <Suspense fallback={null}>
      <ParticleField mouse={mouse} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <StructuralCage mouse={mouse} />
      </Float>
    </Suspense>
  );
};

const GlobalBackground: React.FC = () => {
  const mouse = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#06b6d4" />
        <BackgroundContent mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default GlobalBackground;