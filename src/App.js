import { css } from '@emotion/react'
import { Canvas } from 'react-three-fiber'
import SampleBox from './components/SampleBox'
import Controls from './utils/Controls'

const App = () => {
  return (
    <div css={container}>
      <Canvas>
        <SampleBox />
        <Controls />
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
