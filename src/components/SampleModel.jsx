import { Suspense } from 'react'
import VRMAsset from '../utils/VRMAsset'

const SampleModel = () => {
  return (
    <Suspense fallback={null}>
      <VRMAsset url="./models/three-vrm-girl.vrm" />
    </Suspense>
  )
}

export default SampleModel
