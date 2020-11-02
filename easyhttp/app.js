const http = new EasyHTTP();
const getAllUsersButton = document.getElementById('get-all-users');
const getOneUserButton = document.getElementById('get-one-user');
const createNewUserButton = document.getElementById('create-new-user');
const editUserButton = document.getElementById('edit-user');
const deleteUserButton = document.getElementById('delete-user');

getAllUsersButton.addEventListener('click', getAll);
getOneUserButton.addEventListener('click', getOne);
createNewUserButton.addEventListener('click', createUser);
editUserButton.addEventListener('click', editUser);
deleteUserButton.addEventListener('click', deleteUser);

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com',
};

// Get all users
function getAll() {
  http
    .get('https://jsonplaceholder.typicode.com/users')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// Get one user
function getOne() {
  http
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// Create new user
function createUser() {
  http
    .post('https://jsonplaceholder.typicode.com/users', data)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// Update user info
function editUser() {
  http
    .put('https://jsonplaceholder.typicode.com/users/2', data)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// Delete a user
function deleteUser() {
  http
    .delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
