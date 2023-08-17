class GenresItem extends HTMLElement {
    set props({ genre }) {
        this._genre = genre;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <style>
                .genre-text {
                    border-radius: 3rem;
                    border: 3px solid white;
                    margin-left: 0.5rem;
                }
            </style>

            <p class="text-center text-light py-1 px-2 fw-bold genre-text">${this._genre.name}</p>
        `;
    }
}

customElements.define("genres-item", GenresItem);