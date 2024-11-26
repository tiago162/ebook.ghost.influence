function toggleDetails(id) {
    const details = document.getElementById(id);
    const isVisible = details.style.display === 'block';

    // Hide all details
    document.querySelectorAll('.book-details').forEach(detail => {
        detail.style.display = 'none';
    });

    // Toggle visibility
    details.style.display = isVisible ? 'none' : 'block';
}
