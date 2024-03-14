import { Flex, useMediaQuery } from "@chakra-ui/react";
import { memo, useContext, useEffect, useState } from "react";
import { ICard, IContext, IDataState } from "../../type/type";
import { getData } from "../../helpers/getData";
import Loader from "../load/Loader";
import Error from "../load/Error";
import createDataCard from "../../helpers/create/createDataCard";
import MainBottomCard from "./card/MainBottomCard";
import { DrawerContext } from "../../helpers/context";

function MainBottom():JSX.Element {
  const {isWidth} = useContext<IContext>(DrawerContext);
  const [minText] = useMediaQuery(`(max-width: 600px)`);
  const [json,setJson] = useState<IDataState>({
    loading:true,
    error:false,
    data:0
  });

  useEffect(():void=>{
    setJson((prv:IDataState)=>({
     ...prv,
      loading:true,
      error:false
    }));
    getData()
    .then((data:number)=>{
      setJson((prv:IDataState)=>({
        ...prv,data
      }));
    })
    .catch(()=>{
      setJson((prv:IDataState)=>({
         ...prv,error:true
      }));
    })
    .finally(()=>{
      setJson((prv:IDataState)=>({
        ...prv,loading:false
      }));
    })
  },[]);

  if (json.loading) return <Loader />;
  if (json.error) return <Error />;

  const data:ICard[] = createDataCard(Math.floor(json.data),minText);
  return (
    <Flex mt={20} gap={isWidth ? 0 : 40}
     w={isWidth ? "100%" : "60%"}>
      {data.map((i:ICard):JSX.Element=>(
        <MainBottomCard
         key={i.text}
         text={i.text}
         title={i.title}
        />
      ))}
    </Flex>
  )
}

export default memo(MainBottom);