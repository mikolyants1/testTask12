import { ICard } from '../../type/type'
import createData from './createData'

function createDataCard(val:number,isWidth:boolean):ICard[] {
   return [
      {
        title:`${createData()}+`,
        text:`техник ${!isWidth ? "для достижения целей" : ""}`
      },
      {
        title:`${val}%`,
        text:`${!isWidth ? "увеличение личной" : ""} продуктивности`
      }
   ]
}

export default createDataCard