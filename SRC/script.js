function toggleExtra(id, btn) {
  const extra = document.getElementById(id);
  extra.classList.toggle('open'); 
  
  if (extra.classList.contains('open')) {
    btn.textContent = 'Ver Menos';
  } else {
    btn.textContent = 'Ver Detalhes';
  }
}
