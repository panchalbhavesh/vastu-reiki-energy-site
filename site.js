const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (button && navigation) {
  const close = () => { navigation.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); };
  button.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) { close(); button.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) close(); });
}
function revealLinkedSection() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (target && target.tagName === 'DETAILS') target.open = true;
}
window.addEventListener('hashchange', revealLinkedSection);
revealLinkedSection();
