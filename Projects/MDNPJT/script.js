const btn = document.querySelector('button');

function greet() {
  const name = prompt('Enter your name');
  const greeting = document.querySelector('h1');

  greeting.textContent = `Hello ${name}! Nice to meet you.`
}

btn.addEventListener('click', greet);

