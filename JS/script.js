const divNames = document.querySelector('.div__name');

for (let i = 0; i < 5; i++) { 
  const internalDiv = document.createElement('div');
  internalDiv.classList.add('div__name__internal');

  for (let j = 0; j < 3; j++) { 
    const p = document.createElement('p');
    p.textContent = 'Raiele Leite';

    if ((i * 3 + j) % 2 === 0) {
      p.classList.add('name__type1');
    } else {
      p.classList.add('name__type2');
    }

    internalDiv.appendChild(p);
  }

  divNames.appendChild(internalDiv);
}


const FullStackTechnologies = [
  "HTML","CSS","JavaScript","TypeScript","React","Vue.js","Angular","Tailwind CSS","Bootstrap","Next.js",
  "Node.js","Express","Django","Flask","Ruby on Rails","Spring Boot","ASP.NET Core",
  "PostgreSQL","MySQL","MongoDB","SQLite","Redis",
  "Docker","Kubernetes","Nginx","GitHub Actions","Vercel","Netlify","AWS","Google Cloud","Heroku",
  "Git","GitHub","ESLint","Prettier","Webpack","Vite","Jest","Cypress","Postman"
];

const divTech = document.querySelector('.technologies');

const divTechFirst = document.createElement('div');
const divTechSecond = document.createElement('div');

divTechFirst.classList.add('div__tech');
divTechSecond.classList.add('div__tech');

divTech.appendChild(divTechFirst);
divTech.appendChild(divTechSecond);

const half = Math.ceil(FullStackTechnologies.length / 2);

FullStackTechnologies.forEach((tech, i) => {
  const p = document.createElement('p');
  p.textContent = tech;
  p.classList.add('itens__tech');

  if (i < half) {
    divTechFirst.appendChild(p);
  } else {
    divTechSecond.appendChild(p);
  }
});

function autoScrollHorizontal(element, speed = 1) {
  return setInterval(() => {
    element.scrollLeft += speed;
    if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
      element.scrollLeft = 0;
    }
  }, 20);
}


autoScrollHorizontal(divTechFirst, 1);
autoScrollHorizontal(divTechSecond, 2);


