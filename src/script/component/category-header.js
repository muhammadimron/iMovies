class CategoryHeader extends HTMLElement {
    set props({ title, type, category, clickEvent }) {
        this._title = title;
        this._type = type;
        this._category = category;
        this._clickEvent = clickEvent;
        this.render();
    }
    
    render() {
        let typeFilm = "";
        if(this._title === "similar") {
            typeFilm = `${this._type}/similar`;
        } else if (this._title === "recommendations") {
            typeFilm = `${this._type}/recommendations`;
        } else {
            typeFilm = this._type;
        }

        this.innerHTML = `
            <style>
                .btn-view {
                    color: #fff;
                    border: 0.2rem solid #fff;
                    font-size: 0.8rem;
                    border-radius: 1rem;
                }

                .btn-view:hover {
                    background: #fff;
                    color: #000;
                    font-size: 0.8rem;
                    border-radius: 1rem;
                    box-shadow: -1px 2px 17px 0px rgba(255,250,250,0.78);
                    -webkit-box-shadow: -1px 2px 17px 0px rgba(255,250,250,0.78);
                    -moz-box-shadow: -1px 2px 17px 0px rgba(255,250,250,0.78);
                }

                @media screen and (max-width: 954px) {
                    .card-list h4 {
                        font-size: 1.2rem;
                    }
                }

                @media screen and (max-width: 720px) {
                    .card-list h4 {
                        font-size: 1rem;
                    }

                    .btn-view,
                    .btn-view:hover {
                        font-size: 0.6rem;
                    }
                }
            </style>

            <div class="card-list row justify-content-between text-center p-2">
                <div class="col-3">
                    <h4 class="text-light text-capitalize fw-bold">${this._title}</h4>
                </div>
                <div class="col-2">
                    <a href="/${typeFilm}/${this._category}" class="btn btn-view fw-bold pr-5 pl-5 pt-1 pb-1 link">View All</a>
                </div>
            </div>
        `;

        const links = this.querySelectorAll('.link');
        links.forEach(link => {
            link.addEventListener("click", this._clickEvent);
        });
    }
}

customElements.define('category-header', CategoryHeader);