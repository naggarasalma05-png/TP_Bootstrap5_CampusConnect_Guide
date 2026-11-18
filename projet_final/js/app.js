// CampusConnect - JavaScript pédagogique sans serveur.
const racine = document.documentElement;
const themeBouton = document.getElementById('themeBtn');
themeBouton.addEventListener('click', () => {
  racine.dataset.bsTheme = racine.dataset.bsTheme === 'dark' ? 'light' : 'dark';
});

// L’événement show.bs.modal permet de savoir quel bouton a ouvert la modale.
const inscriptionModal = document.getElementById('modalInscription');
inscriptionModal.addEventListener('show.bs.modal', (event) => {
  const atelier = event.relatedTarget?.getAttribute('data-atelier') || 'Atelier non défini';
  document.getElementById('nomAtelierChoisi').textContent = atelier;
});

// Formulaire local : aucune donnée n’est transmise au réseau.
const formulaire = document.getElementById('formActualites');
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  formulaire.classList.add('was-validated');
  const valid = formulaire.checkValidity();
  const retour = document.getElementById('messageActualites');
  retour.textContent = valid ? 'Formulaire valide ! Aucun envoi réel n’a eu lieu.' : 'Veuillez corriger les champs signalés.';
  retour.className = valid ? 'mt-3 text-success fw-bold' : 'mt-3 text-danger fw-bold';
});

// Notification d’exemple pour le panneau latéral.
document.getElementById('appliquerFiltre').addEventListener('click', () => {
  const select = document.getElementById('filtreAtelier');
  document.getElementById('toastTexte').textContent = 'Filtre choisi : ' + select.selectedOptions[0].text + ' (démo).';
  bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('panneauFiltres')).hide();
  bootstrap.Toast.getOrCreateInstance(document.getElementById('toastCampus')).show();
});
