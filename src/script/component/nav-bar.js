class Navbar extends HTMLElement {
    set props({ clickEvent }) {
        this._clickEvent = clickEvent;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .navbar-toggler {
                    border: 3px solid white;
                }

                .nav-item {
                    width: fit-content;
                }

                .nav-link{
                    color: #fff;
                }

                .nav-link:hover,
                .nav-link:focus {
                    border-bottom: 3px solid var(--primary);
                }

                @media screen and (max-width: 1056px) {
                    .navbar-brand {
                        font-size: 1.6rem;
                    }
                    
                    .navbar,
                    .navbar-toggler {
                        font-size: 0.9rem;
                    }
                }

                @media screen and (max-width: 767px) {
                    .navbar-brand {
                        font-size: 1.2rem;
                    }
                    
                    .navbar,
                    .navbar-toggler {
                        font-size: 0.7rem;
                    }
                }
            </style>

            <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                <div class="container-fluid row justify-content-around">
                    <a class="navbar-brand fw-bold col-2" href="#">iMovies</a>
                    <div class="col-3 text-end">
                        <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon text-light"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                                <li class="nav-item me-0 ms-auto">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item me-0 ms-auto">
                                    <a class="nav-link" href="/movie">Movies</a>
                                </li>
                                <li class="nav-item me-0 ms-auto">
                                    <a class="nav-link" href="/tv">TV Series</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        const nav = this.querySelector("nav");
        window.addEventListener("scroll", function(){
            if(window.scrollY > 100) {
                nav.classList.add("bg-dark", "shadow");
            } else {
                nav.classList.remove("bg-dark", "shadow");
            }
        });

        const links = this.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener("click", this._clickEvent);
        });
    }
}

customElements.define('nav-bar', Navbar);