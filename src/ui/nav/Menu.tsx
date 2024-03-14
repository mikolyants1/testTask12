import { Box, Flex } from "@chakra-ui/react"
import { memo } from "react"

function Menu():JSX.Element {
  return (
    <Flex w="40px"
     borderRadius="50%"
     justifyContent="center"
     border="1px solid white"
     alignItems="center"
     flexDir="column"
     h="40px" gap={1.5}>
       {[1,2,3].map((i:number):JSX.Element=>(
         <Box
          key={i}
          w="80%"
          borderRadius={2}
          bg="white"
          minH={0.5}
         />
       ))}
    </Flex>
  )
}

export default memo(Menu)