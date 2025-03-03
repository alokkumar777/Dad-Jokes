const btn = document.querySelector("button");

function greet() {
  const name = prompt("Enter you name");
  const greeting = document.querySelector("#greeting");

  greeting.textContent = `Hello ${name}, How are you?`;
}

btn.addEventListener("click", greet);
