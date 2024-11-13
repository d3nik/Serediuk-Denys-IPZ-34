(() => {
    const refs = {
        filterBtn: document.querySelectorAll("[data-filter]"),
        portfolioCards: document.querySelectorAll(".portfolio-list-item"),
    };
  
    const applyFilter = (e) => {
        document.querySelector(".filter-active").classList.remove("filter-active");
        e.target.classList.add("filter-active");
        
        refs.portfolioCards.forEach((card) => {
            card.classList.add("hidden");
        
            if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
                card.classList.remove("hidden");
            }
        });
    }

    refs.filterBtn.forEach((button) => button.addEventListener("click", applyFilter));
})();  