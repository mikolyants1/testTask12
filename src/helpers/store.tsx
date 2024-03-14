import { IState, IUsers, union,IStore } from "../type/type";

export const setStore = ():IStore => ({
    get:()=>{
      const users:union = localStorage.getItem("users");
      return users ? JSON.parse(users) : {};
    },
    set:(state:IState)=>{
      const data:union = localStorage.getItem("users");
      if (!data){
        localStorage.setItem("users",JSON.stringify({
          data:[
            {
              id:0,
              name:state.name,
              phone:state.phone
            }
        ]}));
      } else {
        const users:IUsers[] = JSON.parse(data).data;
        const isBe:boolean = users.some((i:IUsers)=>(
          i.name == state.name && i.phone == state.phone
        ));
        if (!isBe){
          localStorage.setItem("users",JSON.stringify({
            data:[
                ...users,
                {
                  id:users[users.length-1].id + 1,
                  name:state.name,
                  phone:state.phone
                }
            ]}))
        }
      }
    }
})