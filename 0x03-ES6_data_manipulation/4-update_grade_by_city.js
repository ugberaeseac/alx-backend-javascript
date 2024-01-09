export default function updateStudentGradeByCity(array, city, newGrades) {
  if (Array.isArray(array) || Array.isArray(newGrades)) {
    const newArray = array.filter((student) => student.location === city);
    const gradedStudents = newArray.map((student) => {
      const filterGrade = newGrades.filter((studentGrade) => studentGrade.studentId === student.id);
      let grade;
      if (filterGrade[0]) {
        grade = filterGrade[0].grade;
      } else {
        grade = 'N/A';
      }
      return { ...student, grade };
    });
    return gradedStudents;
  }
  return [];
}
