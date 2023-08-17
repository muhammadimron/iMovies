import "./genres-list.js";
import "./cast-list.js";

class DetailHero extends HTMLElement {
    set props({ casts, detail }) {
        this._casts = casts;
        this._detail = detail;
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
                    float: none;
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
                    background: linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.7) 40%); 
                }

                .c-img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                .carousel-caption {
                    margin-bottom: 1rem;
                }
                
                .c-desc-content h5 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    font-weight: bold;
                }

                .c-desc-content p {
                    font-size: 0.8rem;
                }

                @media screen and (max-width: 1350px) {
                    .c-img-content img {
                        width: 15rem;
                    }

                    .c-desc-content h5 {
                        font-size: 1.5rem;
                    }

                    .c-desc-content p {
                        font-size: 0.7rem;
                    }
                }

                @media screen and (max-width: 1100px) {
                    .c-img-content img {
                        width: 10rem;
                    }
                }

                @media screen and (max-width: 900px) {
                    .c-desc-content h5 {
                        font-size: 1.2rem;
                    }

                    .c-desc-content p {
                        font-size: 0.6rem;
                    }
                }

                @media screen and (max-width: 767px) {
                    .carousel-item{
                        height: 770px;
                    }

                    .c-img-content img {
                        width: 7rem;
                        margin-bottom: 2rem;
                    }
                }

                @media screen and (max-width: 300px) {
                    .c-desc-content h5 {
                        font-size: 1rem;
                    }

                    .c-desc-content p {
                        font-size: 0.5rem;
                    }
                }
            </style>

            <div class="carousel-item active">
                <img src="http://image.tmdb.org/t/p/w1280${this._detail.backdrop_path}" class="d-block c-img" alt="${this._detail.original_title || this._detail.original_name}">
                <div class="carousel-caption row justify-content-between">
                    <div class="c-img-content col-md-3 align-self-center">
                        <img src="http://image.tmdb.org/t/p/w300${this._detail.poster_path}" alt="${this._detail.original_title || this._detail.original_name}">
                    </div>    
                    <div class="c-desc-content col-md-8 align-self-center text-start">
                        <h5>${this._detail.original_title || this._detail.original_name}</h5>
                        <div class="genres-wrapper"></div>
                        <p>${this._detail.overview}</p>
                        <div class="casts-wrapper"></div>
                    </div>
                </div>
            </div>
        `;

        const genres = document.createElement("genres-list");
        genres.props = { genres: this._detail.genres };
        genres.className = "d-flex flex-row";
        this.querySelector(".genres-wrapper").appendChild(genres);

        const casts = document.createElement("cast-list");
        casts.props = { casts: this._casts };
        this.querySelector(".casts-wrapper").appendChild(casts);
    }
}

customElements.define("detail-hero", DetailHero);