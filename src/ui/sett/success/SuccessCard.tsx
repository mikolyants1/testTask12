import { Box, Flex } from '@chakra-ui/react'

function SuccessCard():JSX.Element {
  return (
    <>
      <Box w={150} 
       m="80px auto" fontSize={34}>
        Спасибо за заявку
      </Box>
      <Box w={240}
       textAlign="center"
       fontSize={25}
       m="100px auto">
         Я обязательно свяжусь
          с вами в ближайшее время
      </Box>
      <Flex w={330}
       fontSize={14} mt="60px"
       justifyContent="end">
        <Box borderTop="1px solid white"
         borderBottom="1px solid white">
          ALEX. SHEVTSOV
        </Box>
      </Flex>
    </>
  )
}

export default SuccessCard