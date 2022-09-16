async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users.map((user) => console.log(user.name));
}

console.log(fetchUsers());
