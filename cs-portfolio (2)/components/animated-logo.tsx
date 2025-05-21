"use client"

import { useEffect, useRef } from "react"

export default function AnimatedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 200
    canvas.height = 200

    // Animation variables
    let frame = 0
    const totalFrames = 120

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate animation progress (0 to 1)
      const progress = frame / totalFrames

      // Set line style
      ctx.lineWidth = 4
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.strokeStyle = "#000000"

      // Draw left bracket
      const leftBracketProgress = Math.min(1, progress * 3)
      if (leftBracketProgress > 0) {
        ctx.beginPath()
        ctx.moveTo(60, 50)
        ctx.lineTo(40, 100 * leftBracketProgress)
        if (leftBracketProgress === 1) {
          ctx.lineTo(60, 150)
        }
        ctx.stroke()
      }

      // Draw right bracket
      const rightBracketProgress = Math.max(0, Math.min(1, (progress - 0.33) * 3))
      if (rightBracketProgress > 0) {
        ctx.beginPath()
        ctx.moveTo(140, 50)
        ctx.lineTo(160, 100 * rightBracketProgress)
        if (rightBracketProgress === 1) {
          ctx.lineTo(140, 150)
        }
        ctx.stroke()
      }

      // Draw slash
      const slashProgress = Math.max(0, Math.min(1, (progress - 0.66) * 3))
      if (slashProgress > 0) {
        ctx.beginPath()
        ctx.moveTo(120, 50)
        ctx.lineTo(80, 50 + 100 * slashProgress)
        ctx.stroke()
      }

      // Increment frame
      frame = (frame + 1) % totalFrames

      // Request next frame
      requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    // Cleanup
    return () => {
      // No cleanup needed for this animation
    }
  }, [])

  return (
    <canvas ref={canvasRef} width={200} height={200} className="mx-auto mb-8" aria-label="Animated developer logo" />
  )
}
