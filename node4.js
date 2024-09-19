const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery_product');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        button.classList.toggle('active');
    });
});

const arrowButton = document.querySelector('#arrow-icon');

arrowButton.addEventListener('click', () => {
  // Add your desired functionality here
  console.log('Arrow button clicked!');
});