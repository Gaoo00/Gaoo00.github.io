const viewer = document.querySelector('dialog');
const expandedImage = viewer.querySelector('img');
viewer.querySelector('button').addEventListener('click', () => viewer.close());
document.querySelectorAll('.image-link').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const original = link.querySelector('img');
    expandedImage.src = original.src;
    expandedImage.alt = original.alt;
    viewer.querySelector('p').textContent = original.alt;
    viewer.showModal();
  });
});
