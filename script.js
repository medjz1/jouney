document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('memoryModal');
    const span = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById('modalText');

    // Sample messages - REPLACE THESE WITH YOUR ACTUAL CONTENT
    const memories = {
        mountain1: {
            title: "First Challenge",
            content: "Remember when we...",
            heart: "red-heart.png"
        },
        mountain2: {
            title: "Big Obstacle",
            content: "That time we...",
            heart: "red-heart.png"
        },
        mountain3: {
            title: "Recent Triumph",
            content: "I'm proud we...",
            heart: "red-heart.png"
        },
        river1: {
            title: "First Change",
            content: "When we decided...",
            heart: "red-heart.png"
        },
        river2: {
            title: "Growing Phase",
            content: "The way we...",
            heart: "red-heart.png"
        },
        river3: {
            title: "Current Transition",
            content: "As we...",
            heart: "red-heart.png"
        },
        star1: {
            title: "Dream 1",
            content: "I can't wait...",
            heart: "pink-heart.png"
        },
        star2: {
            title: "Dream 2",
            content: "One day...",
            heart: "pink-heart.png"
        },
        star3: {
            title: "Dream 3",
            content: "I envision...",
            heart: "pink-heart.png"
        },
        star4: {
            title: "Dream 4",
            content: "Our plan...",
            heart: "pink-heart.png"
        },
        star5: {
            title: "Dream 5",
            content: "Someday...",
            heart: "pink-heart.png"
        }
    };

    document.querySelectorAll('.clickable-area').forEach(area => {
        area.addEventListener('click', (e) => {
            const id = e.target.id;
            const memory = memories[id];
            
            if (memory) {
                modalText.innerHTML = `
                    <h2>${memory.title}</h2>
                    <p>${memory.content}</p>
                    <img src="${memory.heart}" alt="Heart" class="modal-heart">
                `;
                modal.style.display = 'block';
            }
        });
    });

    span.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    }
});
