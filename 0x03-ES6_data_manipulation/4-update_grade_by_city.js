export default function updateStudentGradeByCity(array, city, newGrades) {
  if (Array.isArray(array) || Array.isArray(newGrades)) {
    const newArray = array.filter((student) => student.location === city);
    const gradedStudents = newArray.map((student) => {
      const filterGrade = newGrades.filter((studentGrade) => studentGrade.studentId === student.id);

      let grades;
      if (filterGrade[0]) {
        grades = filterGrade[0].grade;
      } else {
        grades = 'N/A';
      }
      return { ...student, grades };
    });
    return gradedStudents;
  }
  return [];
}
