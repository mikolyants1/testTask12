import axios, { AxiosResponse } from 'axios'
import { IData } from '../type/type'

export async function getData():Promise<number> {
  return await axios
  .get("https://www.cbr-xml-daily.ru/daily_json.js")
  .then(({data}:AxiosResponse<IData>)=>data.Valute.GBP.Value);
}