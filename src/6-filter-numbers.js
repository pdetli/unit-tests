export const filterNumbers = (array, largerThan) => {
  
  // const result = array.filter( )
  // return array
// const largerArray = []


//   if ( array < largerThan) {
// return array
//   } 

const newNumbers = []
array.forEach(number => {
  if (largerThan >= number) {
    newNumbers.push(number) }
})
return newNumbers

}
