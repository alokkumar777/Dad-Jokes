let users = [];
let userIdCounter = 1;

const userTableBody = document.getElementById("userTableBody");

// Add user
document.getElementById("addUserForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("addName").value.trim();
  const email = document.getElementById("addEmail").value.trim();
  const role = document.getElementById("addRole").value;

  if (name && email && role) {
    const newUser = {
      id: userIdCounter++,
      name,
      email,
      role,
    };
    users.push(newUser);
    renderTable();
    this.reset();
    bootstrap.Modal.getInstance(document.getElementById("addUserModal")).hide();
  }
});

// Edit user
function openEditModal(id) {
  const user = users.find((u) => u.id === id);
  document.getElementById("editUserId").value = user.id;
  document.getElementById("editName").value = user.name;
  document.getElementById("editEmail").value = user.email;
  document.getElementById("editRole").value = user.role;

  const editModal = new bootstrap.Modal(
    document.getElementById("editUserModal")
  );
  editModal.show();
}

document
  .getElementById("editUserForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = parseInt(document.getElementById("editUserId").value);
    const name = document.getElementById("editName").value.trim();
    const email = document.getElementById("editEmail").value.trim();
    const role = document.getElementById("editRole").value;

    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { id, name, email, role };
      renderTable();
      bootstrap.Modal.getInstance(
        document.getElementById("editUserModal")
      ).hide();
    }
  });

// Delete user
function deleteUser(id) {
  users = users.filter((u) => u.id !== id);
  renderTable();
}

// Render user table
function renderTable() {
  userTableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="openEditModal(${
            user.id
          })">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${
            user.id
          })">Delete</button>
        </td>
      `;

    userTableBody.appendChild(row);
  });
}
