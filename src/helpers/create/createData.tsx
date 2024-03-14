
function createData():number {
  const data:Date = new Date();
  const month:number = data.getMonth();
  const day:number = data.getDate();
  const year:number = data.getFullYear();
  return month + day + year + 1;
}

export default createData