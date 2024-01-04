export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    else if (typeof length !== 'number') throw TypeError('Length must be a number');
    else if (!(students instanceof Array)) throw TypeError('Students must be an array of strings');
    else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  get name() { return this._name; }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  get length() { return this._length; }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('Length must be a number');
    this._length = newLength;
  }

  get students() { return this._students; }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
}
