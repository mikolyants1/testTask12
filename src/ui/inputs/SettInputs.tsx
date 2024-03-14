import { Box, Checkbox, Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, Dispatch, FocusEvent, SetStateAction, memo } from "react";
import createFields from "../../helpers/create/createFields";
import { IField, IState } from "../../type/type";
import checkErr from "../../helpers/checkErr";

interface IProps {
  focus:(e:FocusEvent<HTMLInputElement>)=>void,
  set:Dispatch<SetStateAction<IState>>,
  error:string[]
}

function SettInputs({focus,set,error}:IProps):JSX.Element {
  const fields:IField[] = createFields();
  const check = checkErr(error);

  const change = (e:ChangeEvent<HTMLInputElement>):void => {
    if (e.target.type === "text"){
       set((prv:IState)=>({
        ...prv,[e.target.name]:e.target.value
       }));
    } else {
       set((prv:IState)=>({
         ...prv,checked:e.target.checked
       }));
    };
  };
  
  return (
    <Flex w={300}
     justifyContent="center"
     alignItems="center"
     flexDir="column"
     m="auto">
     {fields.map((i:IField):JSX.Element=>(
      <Input
       key={i.en}
       fontSize={20}
       isInvalid={check(i.en)}
       errorBorderColor="red.500"
       color={check(i.en) ? "red" : "white"}
       placeholder={i.ru}
       _placeholder={{
         color:check(i.en) ? "red" : "rgb(130,130,130)"
       }}
       variant="flushed"
       onChange={change}
       onFocus={focus}
       name={i.en}
       type="text"
       mt="25px"
      />
     ))}
      <Flex w={300} mt="70px"
       alignItems="center">
        <Checkbox size="lg"
         isInvalid={check("check")}
         w="50px" h="50px"
         onChange={change}
         onFocus={focus}
         type="checkbox"
         name="check"
        />
        <Box fontSize={14}
         color={check("check") ? "red" : "white"}>
          Согласен на сохранение и
          обработку персональных данных
        </Box>
      </Flex>
    </Flex>
  )
}

export default memo(SettInputs)