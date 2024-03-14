import { Box, Flex, useMediaQuery } from "@chakra-ui/react"
import Menu from "./nav/Menu";

function Header():JSX.Element {
  const items:string[] = ["Обо мне","Наставничество","Мероприятие","Кейсы","Отзывы","Контакты"];
  const [isWidth] = useMediaQuery('(max-width: 1000px)');
  return (
    <Flex w={isWidth ? "100%" : "80%"}
     alignItems="center"
     justifyContent="space-around"
     m="40px auto" h={30}>
      <Box borderTop="1px solid white"
       borderBottom="1px solid white">
        ALEX. SHEVTSOV
      </Box>
      {!isWidth && (
       <Flex gap={5} fontSize={14}>
        {items.map((i:string):JSX.Element=>(
         <Box key={i}>
            {i}
         </Box>
        ))}
       </Flex>)}
      <Flex fontWeight="bold"
       alignItems="center"
       gap={5}>
       {isWidth && <Menu />}
        8-345-123-34-45
      </Flex>
    </Flex>
  )
}

export default Header