import "./genres-item.js"

class GenresList extends HTMLElement {
    set props({ genres }) {
        this._genres = genres;
        this.render();
    }
    
    render() {
        this._genres.forEach(genre => {
            const item = document.createElement("genres-item");
            item.props = { genre: genre };

            this.appendChild(item);
        });
    }
}

customElements.define("genres-list", GenresList);