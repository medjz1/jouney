document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('memoryModal');
    const span = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById('modalText');

    // Define your messages here
    const memories = {
        mountain: {
            title: "The Challenges We've Conquered",
            content: "Remember when we... [your personal message here]"
        },
        river: {
            title: "Growing Together",
            content: "That time we... [your personal message here]"
        },
        star: {
            title: "Our Shared Dreams",
            content: "I can't wait until we... [your personal message here]"
        }
    };

    // Add click handlers to all clickable areas
    document.querySelectorAll('.clickable-area').forEach(area => {
        area.addEventListener('click', (e) => {
            const type = Array.from(e.target.classList).find(c => 
                c === 'mountain' || c === 'river' || c === 'star');
            
            modalText.innerHTML = `
                <h2>${memories[type].title}</h2>
                <p>${memories[type].content}</p>
                <img src="heart.png" alt="Heart" style="width: 30px;">
            `;
            modal.style.display = 'block';
        });
    });

    // Close modal
    span.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    }
});
