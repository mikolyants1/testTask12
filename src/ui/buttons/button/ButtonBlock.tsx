import { memo } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react';

interface IProps {
    bg:string,
    text:string,
    click:()=>void,
    isWidth?:boolean,
    alt?:string
}
function ButtonBlock({bg,text,click,isWidth,alt}:IProps):JSX.Element {
  const back:string = bg == "white" ? "#133457" : "white";
  const border:string = bg == "1px solid white" ? "none" : "1px solid white";
  const title:string = isWidth ? alt ? alt : "" : text;

  return (
    <Flex onClick={click}>
        <Button
         borderRadius="none"
         fontSize={16}
         border={border} bg={bg}
         color={back} _hover={{}}>
           {title}
        </Button>
        <Box ml={0.4} w="40px"
         border="1px solid white"
         borderLeft={`1px solid ${back}`}
         textAlign='center'
         bg={bg} h="40px">
          <Box w="100%" ml={3}
           transform="rotate(40deg)"
           fontSize={34} h="100%"
           textAlign="center"
           color={back}>
             &rarr;
         </Box>
       </Box>
      </Flex>
  )
}

export default memo(ButtonBlock)