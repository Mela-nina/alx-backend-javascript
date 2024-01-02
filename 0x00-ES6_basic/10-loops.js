export default function appendToEachArrayValue(array, appendString) {
  const returnArray = [];
  for (const item of array) {
    returnArray.push(appendString + item);
  }

  return returnArray;
}
