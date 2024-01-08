export default function getStudentsByLocation(array, city) {
  return array.filter((value) => value.location === city);
}
