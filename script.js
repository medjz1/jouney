document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('memoryModal');
    const span = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById('modalText');
    const modalContent = document.querySelector('.modal-content');

    const memories = {
        mountain1: { /* Add your messages */ },
        mountain2: { /* ... */ },
        mountain3: { /* ... */ },
        river1: { /* ... */ },
        river2: { /* ... */ },
        river3: { /* ... */ },
        star1: { /* ... */ },
        star2: { /* ... */ },
        star3: { /* ... */ },
        star4: { /* ... */ },
        star5: { /* ... */ }
    };

    document.querySelectorAll('.clickable-area').forEach(area => {
        area.addEventListener('click', (e) => {
            const id = e.target.id;
            const isStar = e.target.classList.contains('star');
            
            modalContent.classList.toggle('shared-dream', isStar);
            modalText.innerHTML = `
                <h2 class="${isStar ? 'pink-title' : ''}">${memories[id].title}</h2>
                <p>${memories[id].content}</p>
                <img src="${isStar ? 'pink-heart.png' : 'red-heart.png'}" alt="Heart" style="width: 25px;">
            `;
            modal.style.display = 'block';
        });
    });

    span.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    }
});
