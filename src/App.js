import { css } from '@emotion/react'
import { Canvas } from 'react-three-fiber'
import { Vector3 } from 'three'
import SampleModel from './components/SampleModel'
import Controls from './utils/Controls'

const App = () => {
  return (
    <div css={container}>
      <Canvas>
        <SampleModel />
        <Controls defaultCameraPosition={[0, 1.25, 1]} target={new Vector3(0, 1, 0)} />
        <directionalLight position={[1, 1, 1]} />
        <gridHelper />
      </Canvas>
    </div>
  )
}

const container = css`
  width: 100vw;
  height: 100vh;
`

export default App
