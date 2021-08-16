import React, { useState, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRM, VRMUtils, VRMSchema } from '@pixiv/three-vrm'

const VRMAsset = ({ url }) => {
  const [scene, setScene] = useState(null)
  const gltf = useLoader(GLTFLoader, url)

  useEffect(() => {
    VRMUtils.removeUnnecessaryJoints(gltf.scene)
    VRM.from(gltf).then((vrm) => {
      setScene(vrm.scene)
      const boneNode = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Hips)
      boneNode.rotateY(Math.PI)
    })
  }, [gltf, setScene])

  if (scene === null) {
    return null
  }

  return <primitive object={scene} dispose={null} />
}

export default VRMAsset
