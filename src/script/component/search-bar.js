class SearchBar extends HTMLElement {
    set props({ title, category, clickEvent }) {
        this._title = title;
        this._category = category;
        this._clickEvent = clickEvent;
        this.render();
    }

    get value() {
        return this.querySelector('.search-element').value;
    }

    render() {
        let text = "";
        if (this._category.includes("_")){
            this._category.split("_").forEach(element => {
                text += `${element} `;
            });
        } else {
            text = this._category;
        }

        this.innerHTML = `
            <style>
                .search-wrapper {
                    height: 250px;
                    width: 100%;
                    background: black;
                    color: white;
                }

                .search-wrapper h3 {
                    padding: 5rem 0 1rem;
                }

                .search-wrapper .input-group {
                    width: 60%;
                }

                .search-element,
                .search-element::placeholder {
                    background: #222831;
                    color: var(--light);
                }

                .search-element:focus,
                .search-element:focus::placeholder {
                    background: #393e46;
                    color: var(--light);
                }

                .btn-search,
                .btn-search:hover {
                    background: var(--primary);
                    color: #fff;
                    font-weight: bold;
                }

                .btn-search:hover {
                    box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                    -webkit-box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                    -moz-box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                }

                @media screen and (max-width: 990px) {
                    .search-wrapper h3 {
                        font-size: 1.2rem;
                    }

                    .search-element,
                    .search-element::placeholder,
                    .search-element:focus,
                    .search-element:focus::placeholder,
                    .btn-search,
                    .btn-search:hover {
                        font-size: 0.8rem;
                    }
                }

                @media screen and (max-width: 767px) {
                    .search-wrapper {
                        height: 220px;
                    }

                    .search-wrapper .input-group {
                        width: 80%;
                    }
                }

                @media screen and (max-width: 360px) {
                    .search-wrapper {
                        height: 200px;
                    }

                    .search-wrapper h3 {
                        font-seize: 0.9rem;
                    }

                    .search-element,
                    .search-element::placeholder,
                    .search-element:focus,
                    .search-element:focus::placeholder,
                    .btn-search,
                    .btn-search:hover {
                        font-size: 0.7rem;
                    }
                }
            </style>
            <div class="search-wrapper text-center">
                <h3 class="text-capitalize fw-bold">iMovies - ${text} ${this._title}</h3>
                <div class="input-group mb-3 mx-auto">
                    <input type="text" class="form-control search-element border-0" placeholder="Search ${this._title} ...">
                    <button class="btn btn-search fw-bold" type="button" data-type="${this._title}" data-category="${this._category}" data-page="2">Search</button>
                </div>      
            </div>
        `;

        this.querySelector('.btn-search').addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);