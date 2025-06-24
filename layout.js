// layout.js - Handles sidebar/navbar logic and HTML includes
function includeHTML(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

function layoutLogic() {
  // Sidebar dropdown logic
  const accesPersonnelToggle = document.getElementById('accesPersonnelToggle');
  const accesPersonnelMenu = document.getElementById('accesPersonnelMenu');
  const accesMaterielToggle = document.getElementById('accesMaterielToggle');
  const accesMaterielMenu = document.getElementById('accesMaterielMenu');
  const suiviProjetsToggle = document.getElementById('suiviProjetsToggle');
  const suiviProjetsMenu = document.getElementById('suiviProjetsMenu');
  const ajouterProjet = document.getElementById('ajouterProjet');
  const logoutSidebarBtn = document.getElementById('logoutSidebarBtn');
  const userProfileArea = document.getElementById('userProfileArea');
  const notificationBell = document.querySelector('#notificationBellArea');
  const notificationDropdown = document.querySelector('#notificationDropdown');

  function closeAllDropdowns(e) {
    if (
      (!accesPersonnelToggle?.contains(e.target) && !accesPersonnelMenu?.contains(e.target)) &&
      (!accesMaterielToggle?.contains(e.target) && !accesMaterielMenu?.contains(e.target)) &&
      (!suiviProjetsToggle?.contains(e.target) && !suiviProjetsMenu?.contains(e.target))
    ) {
      if(accesPersonnelMenu) accesPersonnelMenu.style.display = 'none';
      if(accesMaterielMenu) accesMaterielMenu.style.display = 'none';
      if(suiviProjetsMenu) suiviProjetsMenu.style.display = 'none';
    }
  }

  if (accesPersonnelToggle && accesPersonnelMenu) {
    accesPersonnelToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      accesPersonnelMenu.style.display = accesPersonnelMenu.style.display === 'block' ? 'none' : 'block';
      if(accesMaterielMenu) accesMaterielMenu.style.display = 'none';
      if(suiviProjetsMenu) suiviProjetsMenu.style.display = 'none';
    });
  }
  if (accesMaterielToggle && accesMaterielMenu) {
    accesMaterielToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      accesMaterielMenu.style.display = accesMaterielMenu.style.display === 'block' ? 'none' : 'block';
      if(accesPersonnelMenu) accesPersonnelMenu.style.display = 'none';
      if(suiviProjetsMenu) suiviProjetsMenu.style.display = 'none';
    });
  }
  if (suiviProjetsToggle && suiviProjetsMenu) {
    suiviProjetsToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      suiviProjetsMenu.style.display = suiviProjetsMenu.style.display === 'block' ? 'none' : 'block';
      if(accesPersonnelMenu) accesPersonnelMenu.style.display = 'none';
      if(accesMaterielMenu) accesMaterielMenu.style.display = 'none';
    });
  }
  document.addEventListener('click', closeAllDropdowns);

  // Ajouter un projet
  if (ajouterProjet) {
    ajouterProjet.addEventListener('click', function() {
      window.location.href = 'Project-form.html';
    });
  }
  // Logout
  if (logoutSidebarBtn) {
    logoutSidebarBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }
  // Notification bell
  if (notificationBell && notificationDropdown) {
    notificationBell.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!notificationBell.contains(e.target) && !notificationDropdown.contains(e.target)) {
        notificationDropdown.style.display = 'none';
      }
    });
  }
  // User profile
  if (userProfileArea) {
    userProfileArea.addEventListener('click', function() {
      window.location.href = 'profile.html';
    });
  }
}

// Helper to ensure both sidebar and navbar are loaded before running layoutLogic
function loadLayoutIncludes() {
  let loaded = 0;
  function checkLoaded() {
    loaded++;
    if (loaded === 2) layoutLogic();
  }
  includeHTML('sidebar-include', 'sidebar.html', checkLoaded);
  includeHTML('navbar-include', 'navbar.html', checkLoaded);
}
