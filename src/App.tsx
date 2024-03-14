
import Header from './ui/Header'
import { Box } from '@chakra-ui/react'
import Main from './ui/Main'

function App():JSX.Element {
  return (
    <Box bg="#133457"
     color="white"
     minW={360}>
      <Header />
      <Main />
    </Box>
  )
}

export default App
