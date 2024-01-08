export default function getListStudentIds (array) {
	if (Array.isArray(array)) {
		const newArray = array.map((value) => value.id);
		return newArray;
	} else {
		return [];
	}
}
