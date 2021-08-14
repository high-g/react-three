import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

const SampleBox = () => {
  const ref = useRef({})
  useFrame(() => (ref.current.rotation.z += 0.01))

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="blue" opacity={0.5} transparent />
    </mesh>
  )
}

export default SampleBox
