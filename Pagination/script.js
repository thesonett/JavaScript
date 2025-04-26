const btn = document.getElementById("btn");
const table = document.querySelector("table");
const pageNo = document.getElementById("pageNo");
const dataLimit = document.getElementById("dataLimit");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const page = parseInt(pageNo.value);
  const limit = parseInt(dataLimit.value);

  const url = `http://localhost:3000/users?pageNo=${page}&dataLimit=${limit}`;

  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users)

    table.innerHTML = `
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
      </tr>
    `;

    users.forEach(user => {
      const row = table.insertRow();
      row.innerHTML = `
        <td>${user.user_id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
      `;
    });

  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
});
