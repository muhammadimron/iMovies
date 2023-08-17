class CardItem extends HTMLElement {
    set props({ item, clickEvent, route }) {
        this._item = item;
        this._clickEvent = clickEvent;
        this._route = route;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .item:hover .card-header .btn {
                    background: rgba(0,0,0,0.5);
                }
                
                .item:hover .card-header i {
                    color: red;
                }

                .item:hover .card-body a {
                    color: red !important;
                }

                .card-header .btn {
                    background: transparent;
                    width: 100%;
                    height: 100%;
                    border-radius: 0;
                }

                i {
                    font-size: 4rem;
                    color: transparent;
                }

                .card-body {
                    background: #000;
                    font-size: 0.9rem;
                }
            </style>

            <div class="item" style="width: 10rem;">
                <div class="card border-0">
                    <div class="card-header text-center p-0 border-0" style="background-image: url(http://image.tmdb.org/t/p/w200${this._item.poster_path});background-size: 100%;background-repeat: no-repeat;background-position-y:bottom;height: 240px;">
                        <button type="button" class="btn btn-trailer-category" data-id="${this._item.id}" data-type="${this._item.original_title ? 'movie' : 'tv'}">
                            <i class="bi bi-youtube" data-id="${this._item.id}" data-type="${this._item.original_title ? 'movie' : 'tv'}"></i>
                        </button>
                    </div>
                    <div class="card-body text-center">
                        <a href="/${this._item.original_title ? 'movie' : 'tv'}/${this._item.id}" class="text-light text-center text-decoration-none fw-bold link">${this._item.original_title || this._item.original_name}</a>
                    </div>
                </div>
            </div>
        `;

        this.querySelectorAll('.btn-trailer-category').forEach(trailer => {
            trailer.addEventListener('click', this._clickEvent);
        });

        const links = this.querySelectorAll('.link');
        links.forEach(link => {
            link.addEventListener("click", this._route);
        });
    }
}

customElements.define('card-item', CardItem);