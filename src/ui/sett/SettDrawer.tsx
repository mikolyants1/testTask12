import { Box, Drawer, DrawerBody, DrawerCloseButton,DrawerContent,
 DrawerHeader, DrawerOverlay, Flex, useMediaQuery } from '@chakra-ui/react'
import {FocusEvent, useCallback, useContext, useEffect, useState } from 'react'
import { IContext, IState, IStore } from '../../type/type'
import { DrawerContext } from '../../helpers/context'
import SettInputs from '../inputs/SettInputs';
import ButtonBlock from '../buttons/button/ButtonBlock';
import SuccessCard from './success/SuccessCard';
import compare from '../../helpers/compare';
import { setStore } from '../../helpers/store';

function SettDrawer():JSX.Element {
  const store:IStore = setStore();
  const {isOpen,onClose} = useContext<IContext>(DrawerContext);
  const [isWidth] = useMediaQuery(`(max-width: 500px)`)
  const [success,setSuccess] = useState<boolean>(false);
  const [error,setError] = useState<string[]>([]);
  const [state,setState] = useState<IState>({
    name:"",
    phone:"",
    checked:false
  });

  useEffect(():void=>{
    setError([]);
    setSuccess(false);
  },[isOpen]);

  const onFocus = useCallback((e:FocusEvent<HTMLInputElement>):void => {
    const newErr:string[] = error
    .filter((i:string)=>i !== e.target.name);
    setError(newErr);
  },[error]);

  const handler = useCallback(():void=>{
    setError([]);
    if (!state.name){
        setError((prv:string[])=>([
            ...prv,"name"
        ]));
     };
     if (!state.phone){
        setError((prv:string[])=>([
            ...prv,"phone"
        ]));
     };
     if (!state.checked){
        setError((prv:string[])=>([
            ...prv,"check"
        ]));
     };
     if (compare(state)){
        setSuccess(true);
        store.set(state);
     };
  },[state]);

  return (
    <Drawer
     isOpen={isOpen}
     placement='left'
     onClose={onClose}
     size={isWidth ? "xl" : "sm"}>
      <DrawerOverlay />
      <DrawerContent
       bg="#133457"
       color="white">
        <DrawerCloseButton
         color='white'
         border='none'
         fontSize={24}
         mt={5}
         />
         <DrawerHeader />
        <DrawerBody mt="60px">
         {success ? (
           <SuccessCard />
          ) : (
            <>
             <Box w={300} 
              m="auto" fontSize={30}>
               Закажите oбратный звонок
             </Box>
             <SettInputs
              set={setState}
              focus={onFocus}
              error={error}
              />
             <Flex w="100%"
              justifyContent="center"
              mt={20}>
               <ButtonBlock
                bg="#133457"
                text="Заказать обатный звонок"
                click={handler}
                />
             </Flex>
           </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SettDrawer