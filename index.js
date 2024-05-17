document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('show-more');
    const projectTiles = document.querySelectorAll('.project-tile');
    const numberOfProjectsToShow = 9;
    let currentIndex = numberOfProjectsToShow;
  
    for (let i = 0; i < projectTiles.length; i++) {
      if (i >= numberOfProjectsToShow) {
        projectTiles[i].style.display = 'none';
      }
    }
  
    // Add event listener to show more button
    showMoreButton.addEventListener('click', function() {
      // Show the next set of projects
      for (let i = currentIndex; i < currentIndex + numberOfProjectsToShow; i++) {
        if (projectTiles[i]) {
          projectTiles[i].style.display = 'flex';
        }
      }
      currentIndex += numberOfProjectsToShow;
  
      // Hide 'Show More' button if there are no more projects
      if (currentIndex >= projectTiles.length) {
        showMoreButton.style.display = 'none';
      }
    });
  });

  const projects = [
    {
      imageSrc: "./gemini.png",
      projectName: "Gemini AI Chat Clone",
      projectURL: "https://stately-axolotl-14ed3d.netlify.app/"
    },
    {
      imageSrc: "./edusity.png",
      projectName: "University Website",
      projectURL: "https://main--mellifluous-dieffenbachia-38cc75.netlify.app/"
    },
    {
      imageSrc: "./video.png",
      projectName: "YouTube Clone",
      projectURL: "https://video-player-vite.netlify.app/"
    },
    {
      imageSrc: "./music-vite.png",
      projectName: "Spotify Clone",
      projectURL: "https://ltp-music-vite.netlify.app/"
    },
    {
      imageSrc: "./netflix.png",
      projectName: "Netflix Clone",
      projectURL: "https://main--loquacious-moxie-a5ec06.netlify.app/"
    },
    {
      imageSrc: "./Hair.png",
      projectName: "Barbershop design",
      projectURL: "https://hair-studio-ltp.netlify.app/"
    },
    {
      imageSrc: "./amazon.png",
      projectName: "Amazon clone",
      projectURL: "https://astounding-maamoul-8fd06a.netlify.app/"
    },
    {
      imageSrc: "./portfolio2.0.png",
      projectName: "Updated Portfolio",
      projectURL: "https://ltp-portfolio.netlify.app/"
    },
    {
      imageSrc: "./pomoclock.png",
      projectName: "Pomodoro Clock",
      projectURL: "https://portfolio-pomodoro-clock.netlify.app"
    },
    {
      imageSrc: "./skyline.png",
      projectName: "FCC Responsive Skyline",
      projectURL: "https://fcc-responsive-skyline.netlify.app"
    },
    {
      imageSrc: "./calculator.png",
      projectName: "Calculator",
      projectURL: "https://js-calculator-app-fcc.netlify.app"
    },
    {
      imageSrc: "./drum-machine.png",
      projectName: "Drum Machine",
      projectURL: "https://jsx-drum-machine.netlify.app"
    },
    {
      imageSrc: "./tribute.png",
      projectName: "FCC Tribute Page",
      projectURL: "https://fcc-tribute-page-ts.netlify.app"
    },
    {
      imageSrc: "./quote.png",
      projectName: "FCC Random Quote Generator",
      projectURL: "https://random-quote-generator-ltp.netlify.app"
    },
    {
      imageSrc: "./dragon.png",
      projectName: "FCC Dragon Repeller RPG",
      projectURL: "https://dragon-slayer-rpg.netlify.app/"
    },
    {
      imageSrc: "./weather.png",
      projectName: "Weather",
      projectURL: "https://tiny-weather-app.netlify.app"
    },
    {
      imageSrc: "./ecomerce.png",
      projectName: "E-commerce Design",
      projectURL: "https://dancing-griffin-664518.netlify.app"
    },
    {
      imageSrc: "./Calories.png",
      projectName: "FCC Calorie Counter",
      projectURL: "https://calorie-counter-ltp.netlify.app/"
    },
    {
      imageSrc: "./music.png",
      projectName: "FCC Music Player",
      projectURL: "https://js-music-player-fcc.netlify.app/"
    },
    {
      imageSrc: "./date.png",
      projectName: "FCC Date Object",
      projectURL: "https://date-object.netlify.app/"
    },
    {
      imageSrc: "./football.png",
      projectName: "FCC Football Cards",
      projectURL: "https://football-cards-ltp.netlify.app/"
    },
    {
      imageSrc: "./todo.png",
      projectName: "FCC To Do App",
      projectURL: "https://todo-app-ltp.netlify.app/"
    },
    {
      imageSrc: "./sorter.png",
      projectName: "FCC Number Sorter",
      projectURL: "https://number-sorter.netlify.app/"
    },
    {
      imageSrc: "./statistics.png",
      projectName: "FCC Statistics Calculator",
      projectURL: "https://statistics-calculator-ltp.netlify.app/"
    },
    {
      imageSrc: "./binary.png",
      projectName: "FCC Decimal => Binary",
      projectURL: "https://decimal-to-binary-ltp.netlify.app/"
    },
    {
      imageSrc: "./spam.png",
      projectName: "FCC Spam Filter",
      projectURL: "https://spam-filter-fcc.netlify.app/"
    },
    {
      imageSrc: "./desserts.png",
      projectName: "FCC Shopping Cart",
      projectURL: "https://fcc-shopping-cart.netlify.app//"
    },
    {
      imageSrc: "./platformer.png",
      projectName: "FCC Platformer Game",
      projectURL: "https://fcc-platformer.netlify.app//"
    },
    {
      imageSrc: "./Dice.png",
      projectName: "FCC Dice Game",
      projectURL: "https://fcc-dice-game.netlify.app/"
    },
    {
      imageSrc: "./authors.png",
      projectName: "FCC Authors",
      projectURL: "https://fcc-authors.netlify.app/"
    },
    {
      imageSrc: "./leaderboard.png",
      projectName: "FCC Leaderboard",
      projectURL: "https://fcc-leaderboard.netlify.app/"
    }
  ];

function generateProjectTiles() {
  const projectsContainer = document.querySelector(".projects");
  

  projectsContainer.innerHTML = "";

  // Loop through the projects array and generate HTML for each project
  projects.forEach(project => {
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

    projectsContainer.appendChild(projectTile);
  });
}

// Call the function to generate project tiles when the DOM content is loaded
document.addEventListener("DOMContentLoaded", generateProjectTiles);
