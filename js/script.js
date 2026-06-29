document
.getElementById("explorarBtn")
.addEventListener("click", () => {

    document
    .querySelector(".intro")
    .scrollIntoView({
        behavior: "smooth"
    });

});

const filters =
document.querySelectorAll(".filter");

const cards =
document.querySelectorAll(".tech-card");

filters.forEach(btn => {

    btn.addEventListener("click", () => {

        filters.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        const category =
        btn.dataset.category;

        cards.forEach(card => {

            if (
                category === "all" ||
                card.classList.contains(category)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});