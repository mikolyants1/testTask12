export interface IData {
    Valute:{
      GBP:{
        Value:number
      }
    }
}

export interface IDataState {
    loading:boolean,
    error:boolean,
    data:number
}

export interface ICard {
    title:string,
    text:string
}

export interface IContext {
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void,
    isWidth:boolean
}

export interface IStore {
    get:()=>IState,
    set:(state:IState)=>void
};

export interface IState {
    name:string,
    phone:string,
    checked:boolean
}

export interface IField {
    ru:string,
    en:string
}

export interface IUsers {
    id:number,
    name:string,
    phone:string
}

export type union = string | null;