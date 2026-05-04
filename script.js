const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
});

// =============================
// VALIDAZIONE FORM
document.getElementById('contact-form').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;

  // controllo email semplice
  if (!email.includes('@') || !email.includes('.')) {
    alert("Inserisci un'email valida!");
    e.preventDefault();
  }
});

// =============================
// JQUERY EFFETTO VISIVO
$(document).ready(function(){
  $("table, form").hide().fadeIn(1500);
});
