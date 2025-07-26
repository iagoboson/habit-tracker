function salvarHabitos() {
  const checkboxes = document.querySelectorAll('#habit-list input[type="checkbox"]');
  const hoje = new Date().toISOString().split('T')[0];
  const dados = {};

  checkboxes.forEach(cb => {
    dados[cb.dataset.habit] = cb.checked;
  });

  localStorage.setItem(`habits-${hoje}`, JSON.stringify(dados));
  document.getElementById('status').textContent = 'Hábitos salvos para hoje!';
}

window.onload = function () {
  const hoje = new Date().toISOString().split('T')[0];
  const dados = JSON.parse(localStorage.getItem(`habits-${hoje}`) || '{}');

  document.querySelectorAll('#habit-list input[type="checkbox"]').forEach(cb => {
    cb.checked = dados[cb.dataset.habit] || false;
  });
}
