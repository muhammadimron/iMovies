class CastItem extends HTMLElement {
    set props({ cast }) {
        this._cast = cast;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <style>
                .card-cast {
                    margin-left: 0.5rem;
                    width: 5rem;
                }

                .card-cast p {
                    font-size: 0.5rem;
                }

                @media screen and (max-width: 430px) {
                    .card-cast {
                        width: 3rem;
                    }
                }
            </style>

            <div class="card card-cast border-0 flex-shrink-1">
                <img src="http://image.tmdb.org/t/p/w200${this._cast.profile_path}" class="card-img-top" alt="${this._cast.original_name}">
                <div class="card-body px-0">
                    <p class="card-text text-center fw-bold">${this._cast.original_name}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("cast-item", CastItem);