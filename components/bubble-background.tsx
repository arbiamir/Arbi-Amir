'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

interface BubbleProps {
  position: [number, number, number]
  scale: number
  speed: number
  rotationSpeed: [number, number, number]
}

function Bubble({ position, scale, speed, rotationSpeed }: BubbleProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const timeOffset = useRef(Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed + timeOffset.current) * 0.002
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * speed * 0.7 + timeOffset.current) * 0.001

      // Rotation
      meshRef.current.rotation.x += rotationSpeed[0]
      meshRef.current.rotation.y += rotationSpeed[1]
      meshRef.current.rotation.z += rotationSpeed[2]
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
      <meshPhysicalMaterial
        color="#3b82f6"
        metalness={0.2}
        roughness={0.3}
        transmission={0.8}
        thickness={1}
        ior={1.2}
        opacity={0.2}
        transparent
      />
    </Sphere>
  )
}

function BubbleScene() {
  // Generate bubble configurations
  const bubbles = useMemo(() => {
    const config: BubbleProps[] = []
    const count = 12

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 8 + Math.random() * 4
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = -5 + Math.random() * 10

      config.push({
        position: [x, y, z],
        scale: 0.5 + Math.random() * 1.5,
        speed: 0.3 + Math.random() * 0.5,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
        ],
      })
    }

    return config
  }, [])

  return (
    <>
      <hemisphereLight intensity={0.5} color="#0ea5e9" groundColor="#6366f1" />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8b5cf6" />

      {bubbles.map((bubble, i) => (
        <Bubble key={i} {...bubble} />
      ))}
    </>
  )
}

export function BubbleBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 h-full w-full bg-background" />
  }

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
        }}
      >
        <BubbleScene />
      </Canvas>
    </div>
  )
}
