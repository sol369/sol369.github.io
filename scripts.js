const projects = [
    {
        title: "Yunit Investing App",
        image: "images/image_original.png",
        description: "iOS app that allows you to invest in stocks with your friends / family."
    },
    {
        title: "Jeg er mor Podcast App",
        image: "images/image_original_2.png",
        description: "Podcast app for client that allows users to subscribe monthly or yearly to get access to all of their podcast episodes. App uses Firebase to for authentication and database."
    }
];

const projectContainer = document.getElementById('projects');
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.getElementsByClassName('close')[0];

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
    `;

    projectElement.addEventListener('click', () => {
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalText.textContent = project.description;
        modal.style.display = 'block';
    });

    projectContainer.appendChild(projectElement);
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
