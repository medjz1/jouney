document.querySelectorAll('.marker').forEach(marker => {
    marker.addEventListener('click', function() {
        alert(this.getAttribute('data-message'));
    });
});
