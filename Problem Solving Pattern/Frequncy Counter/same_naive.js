function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) return false;
    arr2.splice(currentIndex, 1);
  }
  console.log(arr2)
  return true;
}
let arr1 = [1,2,3], arr2 =[1,9,4]
console.log(same(arr1, arr2))