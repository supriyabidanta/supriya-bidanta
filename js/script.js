document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.style.display === 'none' || !targetElement.style.display) {
                targetElement.style.display = 'block';
                this.textContent = 'Hide Details'; // Update button text
            } else {
                targetElement.style.display = 'none';
                this.textContent = 'View Details'; // Update button text
            }
        });
    });
});
