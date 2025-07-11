"use client"

import { useEffect, useRef } from "react"

export function MemoryNodes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Create memory nodes
    const nodeCount = Math.min(12, Math.floor(containerWidth / 100))

    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement("div")
      node.className = "memory-node"

      // Random size between 40px and 120px
      const size = Math.floor(Math.random() * 80) + 40
      node.style.width = `${size}px`
      node.style.height = `${size}px`

      // Random position
      const left = Math.floor(Math.random() * (containerWidth - size))
      const top = Math.floor(Math.random() * (containerHeight - size))
      node.style.left = `${left}px`
      node.style.top = `${top}px`

      // Random animation delay
      const delay = Math.random() * 5
      node.style.animationDelay = `${delay}s`

      // Random opacity
      const opacity = Math.random() * 0.07 + 0.03
      node.style.opacity = opacity.toString()

      container.appendChild(node)
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return <div ref={containerRef} className="memory-nodes" />
}
