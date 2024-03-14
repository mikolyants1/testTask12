
const checkErr = (arr:string[]) => (str:string):boolean => {
  return arr.some((i:string)=>i == str);
}

export default checkErr