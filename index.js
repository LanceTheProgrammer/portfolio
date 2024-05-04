document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('show-more');
    const projectTiles = document.querySelectorAll('.project-tile');
    const numberOfProjectsToShow = 9;
    let currentIndex = numberOfProjectsToShow;
  
    // Hide all project tiles except the first 9
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