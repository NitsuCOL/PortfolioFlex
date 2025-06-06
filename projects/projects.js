//TODA LA LOGICA DE LAS CARTAS DE LOS PROYECTOS IRIA AQUI

//Funcion que obtiene los datos del json de los proyectos
export default async function dataProjects (){
    try {
        const response = await fetch('projects/projects.json');
        const data = await response.json();
        renderProjects(data);//Llamada a la funcion que inserta las cartas cuando se obtienen los datos del json
    } catch (error) {
        console.log('Error al cargar los proyectos: ', error);
    }
}

//Funcion que cargara las cartas de los proyectos
function renderProjects(projects){
    const container_section = document.getElementById('proyectos');

    projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');

        projectContainer.insertAdjacentHTML('beforeend',
            `
            <div class="img-container__project">
                <img src="${project.img_project}" alt="${project.name_project}">
            </div>
            <div class="info__project">
                <h3>${project.name_project}</h3>
                <p>${project.description}</p>
                <div class="project__tecnologias">
                    <h3>Tecnologías</h3>
                    <div class="iconos-tecnologias">
                    
                    </div>
                </div>
                <a href="${project.url}" class="project__link" target="_blank" rel="noopener">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12" stroke="#bfc0d1" stroke-width="2" stroke-linecap="round"></path> <path d="M20.5 3.5L15 9" stroke="#bfc0d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 3H20.6717C20.853 3 21 3.14703 21 3.32837V8" stroke="#bfc0d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>
            </div>
            `
        );
        
        const iconosContainer = projectContainer.querySelector('.iconos-tecnologias');
        const tecnologias = project.technologies[0];
        for (let nombre in tecnologias){
            const img = document.createElement('img');
            img.src = tecnologias[nombre];
            img.alt = nombre;
            img.title = nombre;
            iconosContainer.appendChild(img);
        }

        container_section.appendChild(projectContainer);

    });
}