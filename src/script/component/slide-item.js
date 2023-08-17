class SlideItem extends HTMLElement {
    set props({ slide, active, clickEvent }) {
        this._slide = slide;
        this._active = active;
        this._clickEvent = clickEvent;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .carousel-item{
                    height: 660px;
                    min-height: 300px;
                    background: no-repeat scroll center scroll;
                    -webkit-background-size: cover;
                    background-size: cover;
                }

                .carousel-item::before{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: rgb(0,0,0);
                    background: linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.7) 50%); 
                }

                .c-img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                .carousel-caption {
                    margin-bottom: 8rem;
                }
                
                .c-desc-content h5 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    font-weight: bold;
                }

                .c-desc-content p {
                    font-size: 0.8rem;
                }

                .btn-trailer,
                .btn-trailer:hover {
                    background: var(--primary);
                    color: #fff;
                    font-weight: bold;
                }

                .btn-trailer:hover {
                    box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                    -webkit-box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                    -moz-box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                }

                @media screen and (max-width: 1000px) {
                    .carousel-caption {
                        margin-bottom: 12rem;
                    }

                    .c-desc-content h5 {
                        font-size: 1.5rem;
                    }
    
                    .c-desc-content p {
                        font-size: 0.7rem;
                    }

                    .c-img-content img {
                        width: 10rem;
                    }

                    .btn-trailer {
                        font-size: 0.8rem;
                    }
                }

                @media screen and (max-width: 767px) {
                    .carousel-caption {
                        margin-bottom: 7rem;
                    }

                    .c-desc-content h5 {
                        font-size: 1rem;
                    }
    
                    .c-desc-content p {
                        font-size: 0.6rem;
                    }

                    .c-img-content img {
                        width: 8rem;
                        margin-bottom: 1rem;
                    }

                    .btn-trailer {
                        font-size: 0.6rem;
                    }
                }

                @media screen and (max-width: 450px) {
                    .c-img-content img {
                        width: 6rem;
                        margin-bottom: 1rem;
                    }

                    .btn-trailer {
                        font-size: 0.7rem;
                    }
                }
            </style>

            <div class="carousel-item ${this._active ? "active" : ""}" data-bs-interval="5000">
                <img src="http://image.tmdb.org/t/p/w1280${this._slide.backdrop_path}" class="d-block c-img" alt="${this._slide.original_title || this._slide.original_name}">
                <div class="carousel-caption row justify-content-around">
                    <div class="c-img-content col-md-3 align-self-center">
                        <img src="http://image.tmdb.org/t/p/w200${this._slide.poster_path}" alt="${this._slide.original_title || this._slide.original_name}">
                    </div>  
                    <div class="c-desc-content col-md-6 align-self-center">
                        <h5>${this._slide.original_title || this._slide.original_name}</h5>
                        <p>${this._slide.overview}</p>
                        <button type="button" class="btn btn-trailer" data-id="${this._slide.id}" data-type="${this._slide.original_title ? 'movie' : 'tv'}">
                            Watch Trailer
                        </button>
                    </div>  
                </div>
            </div>
        `;

        this.querySelectorAll('.btn-trailer').forEach(trailer => {
            trailer.addEventListener('click', this._clickEvent);
        });
    }
}

customElements.define('slide-item', SlideItem);