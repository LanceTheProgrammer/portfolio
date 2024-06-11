document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("show-more");
  const projectsContainer = document.querySelector(".projects");

  const projects = [
    {
      imageSrc: "./todo-react.png",
      projectName: "To-Do List w/ React",
      projectURL: "https://ltp-todo-react.netlify.app/",
    },
    {
      imageSrc: "./gym-app.png",
      projectName: "The workout Generator",
      projectURL: "https://gym-genie.netlify.app/",
    },
    {
      imageSrc: "./weather-react.png",
      projectName: "Weather",
      projectURL: "https://ltp-weather.netlify.app/",
    },
    {
      imageSrc: "./crypto.png",
      projectName: "Crypto Market Tracker",
      projectURL: "https://ltp-crypto.netlify.app/",
    },
    {
      imageSrc: "./gemini.png",
      projectName: "Gemini AI Chat Clone",
      projectURL: "https://stately-axolotl-14ed3d.netlify.app/",
    },
    {
      imageSrc: "./edusity.png",
      projectName: "University Website",
      projectURL: "https://main--mellifluous-dieffenbachia-38cc75.netlify.app/",
    },
    {
      imageSrc: "./video.png",
      projectName: "YouTube Clone",
      projectURL: "https://video-player-vite.netlify.app/",
    },
    {
      imageSrc: "./music-vite.png",
      projectName: "Spotify Clone",
      projectURL: "https://ltp-music-vite.netlify.app/",
    },
    {
      imageSrc: "./netflix.png",
      projectName: "Netflix Clone",
      projectURL: "https://main--loquacious-moxie-a5ec06.netlify.app/",
    },
    {
      imageSrc: "./Hair.png",
      projectName: "Barbershop design",
      projectURL: "https://hair-studio-ltp.netlify.app/",
    },
    {
      imageSrc: "./amazon.png",
      projectName: "Amazon clone",
      projectURL: "https://astounding-maamoul-8fd06a.netlify.app/",
    },
    {
      imageSrc: "./portfolio2.0.png",
      projectName: "Updated Portfolio",
      projectURL: "https://ltp-portfolio.netlify.app/",
    },
    {
      imageSrc: "./pomoclock.png",
      projectName: "Pomodoro Clock",
      projectURL: "https://portfolio-pomodoro-clock.netlify.app",
    },
    {
      imageSrc: "./calculator.png",
      projectName: "Calculator",
      projectURL: "https://js-calculator-app-fcc.netlify.app",
    },
    {
      imageSrc: "./dragon.png",
      projectName: "FCC Dragon Repeller RPG",
      projectURL: "https://dragon-slayer-rpg.netlify.app/",
    },
    {
      imageSrc: "./music.png",
      projectName: "FCC Music Player",
      projectURL: "https://js-music-player-fcc.netlify.app/",
    },
  ];

  const numberOfProjectsToShow = 6;
  let currentIndex = 0;

  // Function to show projects
  function showProjects(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      if (projects[i]) {
        const projectTile = generateProjectTile(projects[i]);
        projectsContainer.appendChild(projectTile);
      }
    }
  }

  // Show initial projects
  showProjects(currentIndex, currentIndex + numberOfProjectsToShow);
  currentIndex += numberOfProjectsToShow;

  // Function to generate project tile
  function generateProjectTile(project) {
    const projectTile = document.createElement("a");
    projectTile.href = project.projectURL;
    projectTile.target = "_blank";
    projectTile.classList.add("project-tile");

    const projectImage = document.createElement("img");
    projectImage.src = project.imageSrc;
    projectImage.alt = "";

    const projectName = document.createElement("p");
    projectName.innerHTML = `<span>&lt;</span>${project.projectName}<span>/&gt;</span>`;

    projectTile.appendChild(projectImage);
    projectTile.appendChild(projectName);

    return projectTile;
  }

  // Add event listener to show more button
  showMoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    const nextIndex = currentIndex + numberOfProjectsToShow;
    showProjects(currentIndex, nextIndex);
    currentIndex = nextIndex;
    if (currentIndex >= projects.length) {
      showMoreButton.style.display = "none";
    }
  });
});
