"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Preload } from "@react-three/drei"
import { Suspense, useState, useEffect, useRef } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"
import ClientOnly from "./client-only"

// Optimized geometry instances
const geometries = {
  icosahedron: new THREE.IcosahedronGeometry(0.5, 0),
  box: new THREE.BoxGeometry(0.8, 0.8, 0.8),
  sphere: new THREE.SphereGeometry(0.4, 16, 16),
}

// Material factory
const createMaterial = (color: string) => {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1,
  })
}

function FloatingGeometry({ position, color }: { position: [number, number, number]; color: string }) {
  const materialRef = useRef(createMaterial(color))

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} geometry={geometries.icosahedron} material={materialRef.current} />
    </Float>
  )
}

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const materialRef = useRef(createMaterial(color))

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <mesh position={position} geometry={geometries.box} material={materialRef.current} />
    </Float>
  )
}

function FloatingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const materialRef = useRef(createMaterial(color))

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
      <mesh position={position} geometry={geometries.sphere} material={materialRef.current} />
    </Float>
  )
}

function AdaptiveScene() {
  const { size } = useThree()
  const [objectCount, setObjectCount] = useState(6)

  useEffect(() => {
    // Adjust number of objects based on screen size and performance
    const width = size.width
    if (width < 768) {
      setObjectCount(3)
    } else if (width < 1024) {
      setObjectCount(4)
    } else {
      setObjectCount(6)
    }
  }, [size.width])

  // Professional color scheme
  const objects = [
    { type: "geometry", position: [-4, 2, -2], color: "#3b82f6" },
    { type: "cube", position: [4, -1, -3], color: "#475569" },
    { type: "sphere", position: [-2, -2, -1], color: "#1e40af" },
    { type: "geometry", position: [3, 3, -4], color: "#64748b" },
    { type: "cube", position: [-5, -1, -2], color: "#2563eb" },
    { type: "sphere", position: [2, -3, -3], color: "#374151" },
  ].slice(0, objectCount)

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

      {objects.map((obj, index) => {
        const position = obj.position as [number, number, number]

        switch (obj.type) {
          case "geometry":
            return <FloatingGeometry key={index} position={position} color={obj.color} />
          case "cube":
            return <FloatingCube key={index} position={position} color={obj.color} />
          case "sphere":
            return <FloatingSphere key={index} position={position} color={obj.color} />
          default:
            return null
        }
      })}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
      <Preload all />
    </>
  )
}

function SceneLoader() {
  return (
    <Suspense fallback={null}>
      <AdaptiveScene />
    </Suspense>
  )
}

export default function ThreeScene() {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    try {
      // Test WebGL support
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        setHasError(true)
      }
    } catch (error) {
      console.warn("Three.js scene failed to load:", error)
      setHasError(true)
    }
  }, [])

  if (hasError) {
    return <div className="absolute inset-0 -z-10" />
  }

  return (
    <ClientOnly fallback={<div className="absolute inset-0 -z-10" />}>
      <div className="absolute inset-0 -z-10 opacity-60">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{
            powerPreference: "high-performance",
            antialias: false,
            depth: false,
            stencil: false,
            alpha: true,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
          }}
        >
          <SceneLoader />
        </Canvas>
      </div>
    </ClientOnly>
  )
}
