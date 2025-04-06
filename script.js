document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('memoryModal');
    const span = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById('modalText');

    // Sample messages - REPLACE THESE WITH YOUR ACTUAL CONTENT
    const memories = {
        mountain1: {
            title: "First Challenge",
            content: "Deciding to go through this together despite the distance and the journey lying ahead was a definitely a big step that i'm proud of",
            heart: "red-heart.png"
        },
        mountain2: {
            title: "Big Obstacle",
            content: "I know that we have to wait but every second that passes makes me look forward to be with you more",
            heart: "red-heart.png"
        },
        river1: {
            title: "Big Change",
            content: "The way we went from short text to calling and seeing each other always makes me happy",
            heart: "red-heart.png"
        },
        river2: {
            title: "Growing Phase",
            content: "We have many differences but we always manage to work around them and adapt to each other",
            heart: "red-heart.png"
        },
        river3: {
            title: "Current Transition",
            content: "I'm working on my sleep and time schudule in general, i want to be have as much time as possible with my beloved",
            heart: "red-heart.png"
        },
        star1: {
            title: "Dream 1",
            content: "The first intimate dream i had about us wasn't that crazy but it's still very special, i remember how my heart was racing",
            heart: "pink-heart.png"
        },
        star2: {
            title: "Dream 2",
            content: "I keep remembering the Hu Tao one randomly, oh and i won't forget about you wearing her costume for me one day",
            heart: "pink-heart.png"
        },
        star3: {
            title: "Dream 3",
            content: "I love our hug and cuddle/ calm and cute dreams, nothing too wild, just us enjoying each other's company",
            heart: "pink-heart.png"
        },
        star4: {
            title: "Dream 4",
            content: "THe dream where i basically see our future and how we get married is great too, insha'allah things turn out like that",
            heart: "pink-heart.png"
        },
        star5: {
            title: "Dream 5",
            content: "I love the teasing dreams too 🙃, not my fault you look so cute when we mess around",
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
