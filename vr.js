const vrButton = document.querySelector('.vr-button');
const vrSection = document.getElementById('vr');

vrButton.addEventListener('click', () => {
    vrSection.classList.add('show');
});