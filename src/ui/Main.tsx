import { Box, Flex, Image,useDisclosure, useMediaQuery } from '@chakra-ui/react'
import img from '../assets/man.png'
import MainButtons from './buttons/MainButtons'
import MainBottom from './bottom/MainBottom'
import { DrawerContext } from '../helpers/context';
import SettDrawer from './sett/SettDrawer';

function Main():JSX.Element {
  const {isOpen,onClose,onOpen} = useDisclosure();
  const [headWidth] = useMediaQuery(`(max-width: 1000px)`);
  const [isWidth] = useMediaQuery("(max-width: 900px)");
  
  return (
    <DrawerContext.Provider
     value={{isOpen,onClose,onOpen,isWidth}}>
      <Box mt="90px" ml={isWidth ? 5 : 10}
       w={isWidth ? "100%" : "85%"}
       pos="relative">
        <SettDrawer />
        <Flex w={isWidth ? "90%" : "70%"}
         alignItems="center"
         justifyContent="center"
         flexDir="column"
         pos="absolute"
         zIndex={101}
         left={0}>
          <Box w={headWidth ? "100%" : "60%"}
           textAlign="center"
           textTransform="uppercase"
           fontSize={isWidth ? 30 : 45}>
            Создаю условия для вашего успеха
          </Box>
          <Box w={isWidth ? "80%" : "58%"}
           fontSize={12}
           color="grey" pl={5}
           borderLeft="1px solid white">
            {!isWidth && `Когда ваше время и энергия сфокусированы,стремление
            к новым возможностям становится реальностью,`} ваш
            успех зависит от вашего действия.
          </Box>
          <MainButtons />
          <MainBottom />
        </Flex>
        <Image
         pos="absolute"
         zIndex={100}
         right={0}
         src={img}
         w={350}
         h={550}
         />
      </Box>
    </DrawerContext.Provider>
  )
}

export default Main