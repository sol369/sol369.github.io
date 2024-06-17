const projects = [
    {
        title: "Project One",
        image: "images/image_original.png",
        description: "Description for project one."
    }
];

const projectContainer = document.getElementById('projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
    `;

    projectContainer.appendChild(projectElement);
});
