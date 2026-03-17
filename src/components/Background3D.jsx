import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';

const Particles = () => {
    const ref = useRef();

    useFrame((state) => {
        // Subtle rotation of the starfield
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.5} color="#00f2ea" />
        </group>
    );
};

const Background3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 0,
            background: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)'
        }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Particles />
            </Canvas>
        </div>
    );
};

export default Background3D;
