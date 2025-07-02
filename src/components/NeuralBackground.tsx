import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const NeuralBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const animationIdRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    })
    rendererRef.current = renderer
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Create neural network nodes
    const nodes: THREE.Mesh[] = []
    const connections: THREE.Line[] = []
    const nodeCount = window.innerWidth < 768 ? 30 : 50

    // Node geometry and materials
    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8)
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4FD1C5,
      transparent: true,
      opacity: 0.8
    })

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone())
      node.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      )
      
      // Add velocity for floating animation
      ;(node as any).velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.01
      )
      
      nodes.push(node)
      scene.add(node)
    }

    // Create connections between nearby nodes
    const createConnections = () => {
      connections.forEach(connection => scene.remove(connection))
      connections.length = 0

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position)
          if (distance < 3) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position
            ])
            
            const material = new THREE.LineBasicMaterial({
              color: 0x8B5CF6,
              transparent: true,
              opacity: Math.max(0.1, 0.5 - distance / 6)
            })
            
            const line = new THREE.Line(geometry, material)
            connections.push(line)
            scene.add(line)
          }
        }
      }
    }

    createConnections()
    camera.position.z = 5

    // Mouse interaction
    const mouse = new THREE.Vector2()
    const raycaster = new THREE.Raycaster()

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(nodes)

      // Reset all nodes
      nodes.forEach(node => {
        ;(node.material as THREE.MeshBasicMaterial).color.setHex(0x4FD1C5)
        node.scale.setScalar(1)
      })

      // Highlight intersected nodes
      if (intersects.length > 0) {
        const intersected = intersects[0].object as THREE.Mesh
        ;(intersected.material as THREE.MeshBasicMaterial).color.setHex(0x8B5CF6)
        intersected.scale.setScalar(1.5)

        // Repel nearby nodes
        nodes.forEach(node => {
          const distance = node.position.distanceTo(intersected.position)
          if (distance < 2 && node !== intersected) {
            const direction = node.position.clone().sub(intersected.position).normalize()
            node.position.add(direction.multiplyScalar(0.1))
          }
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      nodes.forEach(node => {
        node.position.add((node as any).velocity)
        
        if (Math.abs(node.position.x) > 10) (node as any).velocity.x *= -1
        if (Math.abs(node.position.y) > 10) (node as any).velocity.y *= -1
        if (Math.abs(node.position.z) > 5) (node as any).velocity.z *= -1

        const time = Date.now() * 0.001
        ;(node.material as THREE.MeshBasicMaterial).opacity = 0.5 + 0.3 * Math.sin(time + node.position.x)
      })

      if (Date.now() % 100 < 16) {
        createConnections()
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      renderer.dispose()
      
      // Dispose geometries and materials
      nodes.forEach(node => {
        node.geometry.dispose()
        ;(node.material as THREE.Material).dispose()
      })
      connections.forEach(connection => {
        connection.geometry.dispose()
        ;(connection.material as THREE.Material).dispose()
      })
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, rgba(79, 209, 197, 0.1) 0%, rgba(30, 30, 37, 1) 70%)' }}
    />
  )
}

export default NeuralBackground