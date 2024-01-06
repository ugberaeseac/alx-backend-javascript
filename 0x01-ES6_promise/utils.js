export default function uploadPhoto() {
	return Promise.resolve({
		  status: 200,
		  body: 'photo-profile-1',
	});
}

export default function createUser() {
	return Promise.resolve({
		  firstName: 'Guillaume',
		  lastName: 'Salva',
	});
}
