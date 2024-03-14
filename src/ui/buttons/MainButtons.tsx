import { Flex, useMediaQuery} from '@chakra-ui/react'
import { useContext } from 'react'
import { IContext } from '../../type/type'
import { DrawerContext } from '../../helpers/context'
import ButtonBlock from './button/ButtonBlock';

function MainButtons():JSX.Element {
  const {onOpen,isWidth} = useContext<IContext>(DrawerContext);
  const [isMin] = useMediaQuery(`(max-width: 600px)`);
  return (
    <Flex w={isWidth ? "100%" : "60%"}
     justifyContent={isWidth ? "center" : "none"}
     flexDir={isWidth ? "column" : "row"}
     mt={10} gap={10}>
      <ButtonBlock
       bg='white'
       text="Записаться на консультанию"
       alt='Записаться'
       isWidth={isMin}
       click={onOpen}
      />
      <ButtonBlock
       bg='#133457'
       text='Бесплатная консультация'
       alt='Заказать звонок'
       isWidth={isMin}
       click={onOpen}
       />
   </Flex>
  )
}

export default MainButtons