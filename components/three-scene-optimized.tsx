"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Preload } from "@react-three/drei"
import { Suspense, useEffect, useState, useRef } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

// Add at the top after imports
function ErrorFallback() {
  return null
}

// Optimized geometry that's reused across instances
const sharedGeometries = {
  icosahedron: new THREE.IcosahedronGeometry(0.5, 0),
  box: new THREE.BoxGeometry(0.8, 0.8, 0.8),
  sphere: new THREE.SphereGeometry(0.4, 16, 16), // Reduced segments
}

// Optimized materials with shared instances
const createMaterial = (color: string) => {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.8,
    roughness: 0.2,
  })
}

function FloatingGeometry({ position, color }: { position: [number, number, number]; color: string }) {
  const material = useRef(createMaterial(color))

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} geometry={sharedGeometries.icosahedron} material={material.current} />
    </Float>
  )
}

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const material = useRef(createMaterial(color))

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <mesh position={position} geometry={sharedGeometries.box} material={material.current} />
    </Float>
  )
}

function FloatingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const material = useRef(createMaterial(color))

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
      <mesh position={position} geometry={sharedGeometries.sphere} material={material.current} />
    </Float>
  )
}

function AdaptiveScene() {
  const { size, viewport } = useThree()
  const [objectCount, setObjectCount] = useState(6)

  useEffect(() => {
    // Adjust number of objects based on screen size
    if (size.width < 768) {
      setObjectCount(3)
    } else if (size.width < 1024) {
      setObjectCount(4)
    } else {
      setObjectCount(6)
    }
  }, [size.width])

  // Professional blue/gray color scheme
  const objects = [
    { type: "geometry", position: [-4, 2, -2], color: "#3b82f6" }, // Blue
    { type: "cube", position: [4, -1, -3], color: "#475569" }, // Slate
    { type: "sphere", position: [-2, -2, -1], color: "#1e40af" }, // Dark Blue
    { type: "geometry", position: [3, 3, -4], color: "#64748b" }, // Gray
    { type: "cube", position: [-5, -1, -2], color: "#2563eb" }, // Blue
    { type: "sphere", position: [2, -3, -3], color: "#374151" }, // Dark Gray
  ].slice(0, objectCount)

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

      {objects.map((obj, index) => {
        if (obj.type === "geometry") {
          return <FloatingGeometry key={index} position={obj.position as [number, number, number]} color={obj.color} />
        } else if (obj.type === "cube") {
          return <FloatingCube key={index} position={obj.position as [number, number, number]} color={obj.color} />
        } else {
          return <FloatingSphere key={index} position={obj.position as [number, number, number]} color={obj.color} />
        }
      })}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
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

export default function ThreeSceneOptimized() {
  const [mounted, setMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    try {
      setMounted(true)
    } catch (error) {
      console.warn("Three.js scene failed to load:", error)
      setHasError(true)
    }
  }, [])

  if (!mounted || hasError) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Allow ThreeJS to reduce quality for performance
        gl={{
          powerPreference: "high-performance",
          antialias: false, // Disable antialiasing for performance
          depth: false, // Disable depth buffer for performance
          stencil: false, // Disable stencil buffer for performance
        }}
      >
        <SceneLoader />
      </Canvas>
    </div>
  )
}
