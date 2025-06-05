"use client"

import { useEffect, useRef, useCallback } from "react"
import ClientOnly from "./client-only"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }, [])

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const particles: Particle[] = []
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 25))

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }

    particlesRef.current = particles
  }, [])

  const animate = useCallback((currentTime: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    // Throttle animation to 60fps
    if (currentTime - lastTimeRef.current < 16.67) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }
    lastTimeRef.current = currentTime

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(canvas.height, particle.y))

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
      ctx.fill()
    })

    // Draw connections between nearby particles
    const maxDistance = 100
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x
        const dy = particlesRef.current[i].y - particlesRef.current[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2
          ctx.beginPath()
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    resizeCanvas()
    createParticles()
    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [resizeCanvas, createParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ background: "transparent" }}
    />
  )
}

export default function ParticleBackground() {
  return (
    <ClientOnly fallback={<div className="absolute inset-0 -z-10" />}>
      <ParticleCanvas />
    </ClientOnly>
  )
}
