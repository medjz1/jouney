document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('memoryModal');
    const span = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById('modalText');

    // Define your messages here
    const memories = {
    mountain1: {
        title: "First Challenge Together",
        content: "Remember when we... [your first mountain message]"
    },
    mountain2: {
        title: "Biggest Obstacle",
        content: "That time we... [your second mountain message]"
    },
    mountain3: {
        title: "Recent Triumph",
        content: "I'm so proud we... [your third mountain message]"
    },
    river1: {
        title: "First Big Change",
        content: "When we decided to... [your first river message]"
    },
    river2: {
        title: "Growing Together",
        content: "The way we... [your second river message]"
    },
    river3: {
        title: "Current Transition",
        content: "As we... [your third river message]"
    },
    star1: {
        title: "Shared Dream 1",
        content: "I can't wait until we... [first star message]"
    },
    star2: {
        title: "Shared Dream 2",
        content: "One day we'll... [second star message]"
    },
    star3: {
        title: "Shared Dream 3",
        content: "I envision us... [third star message]"
    },
    star4: {
        title: "Shared Dream 4",
        content: "Our plan to... [fourth star message]"
    },
    star5: {
        title: "Shared Dream 5",
        content: "Someday we'll... [fifth star message]"
    }
};

// Update the click handler
document.querySelectorAll('.clickable-area').forEach(area => {
    area.addEventListener('click', (e) => {
        const id = e.target.id;
        modalText.innerHTML = `
            <h2>${memories[id].title}</h2>
            <p>${memories[id].content}</p>
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
