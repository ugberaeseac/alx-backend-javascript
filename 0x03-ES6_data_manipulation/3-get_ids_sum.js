export default function getStudentsIdsSum(array) {
  const idSum = array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return idSum;
}
