import { css } from '@emotion/react'
import { Canvas } from 'react-three-fiber'

const App = () => {
  return (
    <div css={container}>
      <Canvas></Canvas>
    </div>
  )
}

const container = css`
  width: 100vw;
  height: 100vh;
`

export default App
