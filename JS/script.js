const divNames = document.querySelector('.div-name');

for (let i = 0; i < 5; i++) { 
  const internalDiv = document.createElement('div');
  internalDiv.classList.add('div-name-internal');

  for (let j = 0; j < 3; j++) { 
    const p = document.createElement('p');
    p.textContent = 'Raiele Leite';

    if ((i * 3 + j) % 2 === 0) {
      p.classList.add('name-type1');
    } else {
      p.classList.add('name-type2');
    }

    internalDiv.appendChild(p);
  }

  divNames.appendChild(internalDiv);
}





