const projects = [
  { 
    name: "Microsoft Clone", 
    category: "mockup", 
    imageSrc: "/images/6.png", 
    description: "Responsive"
  },
  { 
    name: "Filter Data", 
    category: "javascript", 
    imageSrc: "/images/5.png", 
    description: "Filter the data using js."
  },
  { 
    name: "Project 3", 
    category: "react", 
    imageSrc: "/images/4.png", 
    description: "Description of Project 3"
  },
  { 
    name: "Project 4", 
    category: "others", 
    imageSrc: "/images/3.png", 
    description: "Description of Project 4"
  }
];

const projectList = document.getElementById('project-list');
const showAllBtn = document.getElementById('show-all-btn');
const mockupBtn = document.getElementById('mockup-btn');
const jsProjectBtn = document.getElementById('js-project-btn');
const reactProjectBtn = document.getElementById('react-project-btn');
const othersBtn = document.getElementById('others-btn');

// Add all projects to the project list
projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectCard.dataset.category = project.category;
  
  const projectImg = document.createElement('img');
  projectImg.classList.add('project-img');
  projectImg.src = project.imageSrc;
  projectImg.alt = project.name;
  projectCard.appendChild(projectImg);
  
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.name;
  projectCard.appendChild(projectTitle);
  
  const viewMoreBtn = document.createElement('button');
  viewMoreBtn.classList.add('view-more-btn');
  viewMoreBtn.textContent = 'View More';
  projectCard.appendChild(viewMoreBtn);
  
  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description', 'hidden');
  projectDescription.textContent = project.description;
  projectCard.appendChild(projectDescription);
  
  projectList.appendChild(projectCard);
});

// Filter projects based on category
function filterProjects(category) {
  const projectCards = projectList.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Show all projects
showAllBtn.addEventListener('click', () => {
  filterProjects('all');
});

// Show mockup projects
mockupBtn.addEventListener('click', () => {
  filterProjects('mockup');
});

// Show JavaScript projects
jsProjectBtn.addEventListener('click', () =>{
  filterProjects('javascript');
});

// Show React projects
reactProjectBtn.addEventListener('click', () => {
  filterProjects('react');
});

// Show Other projects
othersBtn.addEventListener('click', ()=>{
  filterProjects('others');
});

// Show all projects by default
filterProjects('all');

