import { Box } from "@chakra-ui/react"
import { memo, useContext } from "react"
import { IContext } from "../../../type/type"
import { DrawerContext } from "../../../helpers/context"

interface props {
  title:string,
  text:string,
};

function MainBottomCard({text,title}:props):JSX.Element {
  const {isWidth} = useContext<IContext>(DrawerContext);
  return (
    <Box w="50%"
     borderLeft="1px solid white"
     pl={1}>
      <Box fontSize={isWidth ? 18 : 25}
       fontWeight="bold">
         {title}
      </Box>
      <Box color="grey"
       fontSize={14}
       mt={isWidth ? 0 : 5}>
        {text}
      </Box>
    </Box>
  )
}

export default memo(MainBottomCard)