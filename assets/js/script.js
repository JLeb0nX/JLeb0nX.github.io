'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Fonction pour ouvrir le modal
function openModal(title, image, description) {
  const modal = document.getElementById('projectModal');
  
  // Remplir le modal
  modal.querySelector('.modal-title').textContent = title;
  modal.querySelector('.modal-img').src = image;
  modal.querySelector('.modal-description').textContent = description;
  
  // Afficher le modal
  modal.style.display = 'block';
}

// Ajouter les event listeners pour tous les projets
document.querySelectorAll('.project-item > a').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Récupérer les informations du projet
      const title = link.querySelector('.project-title').textContent;
      const image = link.querySelector('.project-img img').src;
      const category = link.querySelector('.project-category').textContent;
      
      // Description et boutons selon le projet
      let description = '';
      let buttons = '';
      
      switch(title) {
        case 'S\'initier aux réseaux informatiques':
          description = '<h2>Projet : Initiation aux Réseaux Informatiques avec Raspberry Pi</h2>\n' +
                       'Ce projet combine hardware et software pour créer un système de monitoring environnemental connecté.\n\n' +
                       'Voici les principales sections :\n\n' +
                       '<h3>Configuration et Installation</h3>\n' +
                       '- Installation et configuration d\'un Raspberry Pi OS\n' +
                       '- Mise en place sécurisée avec modification des identifiants par défaut\n' +
                       '- Configuration réseau et obtention d\'adresse IP via DHCP\n\n' +
                       '<h3>Connectivité et Réseau</h3>\n' +
                       '- Implémentation de connexion SSH pour contrôle à distance\n' +
                       '- Utilisation d\'outils réseau comme nmap pour la découverte d\'appareils\n' +
                       '- Compréhension et utilisation du protocole DHCP\n\n' +
                       '<h3>Hardware et Électronique</h3>\n' +
                       '- Conception et réalisation de circuits LED\n' +
                       '- Installation et configuration du capteur DHT22 (température et humidité)\n' +
                       '- Création de schémas de câblage détaillés avec Fritzing\n\n' +
                       '<h3>Programmation et Data</h3>\n' +
                       '- Développement de scripts Python pour contrôler les LED\n' +
                       '- Acquisition de données environnementales via le capteur DHT22\n' +
                       '- Implémentation du protocole MQTT pour la transmission de données\n\n' +
                       '<h2>Compétences Acquises</h2>\n' +
                       '<h3>Compétences Techniques</h3>\n' +
                       '<h4>Administration Système</h4>\n' +
                       '- Installation et configuration d\'un système d\'exploitation Linux\n' +
                       '- Gestion des utilisateurs et sécurisation du système\n' +
                       '- Configuration des services réseau\n\n' +
                       '<h4>Réseaux</h4>\n' +
                       '- Compréhension du protocole DHCP\n' +
                       '- Configuration et utilisation de SSH\n' +
                       '- Utilisation d\'outils de diagnostic réseau (nmap)';
          buttons = '<a href="#" class="btn">Voir le PDF</a><a href="#" class="btn">Voir la vidéo</a>';
          break;
      
          // Ajoutez d'autres cas pour chaque projet
          default:
              description = `Projet réalisé en ${category}.\nCliquez sur les liens ci-dessous pour plus de détails.`;
              buttons = '<a href="#" class="btn">Voir le projet</a>';
      }
      
      // Remplir et afficher le modal
      const modal = document.getElementById('projectModal');
      modal.querySelector('.modal-title').textContent = title;
      modal.querySelector('.modal-img').src = image;
      modal.querySelector('.modal-description').innerHTML = description.replace(/\n/g, '<br>');
      modal.querySelector('.modal-links').innerHTML = buttons;
      modal.style.display = 'block';
  });
});

// Fermer le modal avec le bouton close
document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('projectModal').style.display = 'none';
});

// Fermer le modal en cliquant en dehors
window.addEventListener('click', (e) => {
  const modal = document.getElementById('projectModal');
  if (e.target === modal) {
      modal.style.display = 'none';
  }
});
