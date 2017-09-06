function findMinAndRemove(array){
  let minValue = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
      minIndex = i
    }
  }
  return array.splice(minIndex, 1)
}

// function insertionSort(array){
//   // Loop through each element from left to right
//   for (let i = 1; i < array.length; i++) {
//     // While the element smaller is smaller than its left neighbor
//     for (let j = i; j > 0; j--) {
//       while (array[j] < array[j-1]) {
//         // Swap the two elements
//         let temp = array[j-1]
//         array[j-1] = array[j]
//         array[j] = temp
//       }
//     }
//   }
//   return array
// }

function insertionSort(array) {
  let sorted = []
  while (array.length> 0) {
    sorted.push(findMinAndRemove(array)[0])
  }
  return sorted
}
