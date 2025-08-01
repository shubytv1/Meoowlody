document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.links li').forEach((li, i) => {
    li.style.opacity = 0;
    li.style.transform = 'translateY(30px)';
    setTimeout(() => {
    li.style.transition = 'all 0.6s cubic-bezier(.68,-0.55,.27,1.55)';
    li.style.opacity = 1;
    li.style.transform = 'translateY(0)';
    }, 200 + i * 120);
    });
});
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(btn.dataset.user);
    btn.title = "¡Copiado!";
    setTimeout(() => btn.title = "Copiar usuario", 1200);
  });
});
document.getElementById('darkModeBtn').onclick = () => {
  document.body.classList.toggle('dark');
};