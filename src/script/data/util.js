import DataSource from "./data-source.js";
const bootstrap = require("bootstrap");

let modalWrap = null;

const removeElement = () => {
    const slide = document.querySelector('movie-slide');
    const trailer = document.querySelector('.modal-wrapper');
    const main = document.querySelector('main');

    if (slide !== null) {
        slide.remove();
    }

    if (trailer !== null) {
        trailer.remove();
    }
    
    main.innerHTML = '';
};

const setKeyTrailer = async (e) => {
    try {
        const header = document.querySelector("header");
        const id = e.target.getAttribute("data-id");
        const type = e.target.getAttribute("data-type");
        const result = await DataSource.getTrailer(type, id);
        
        if(result[0] !== undefined) {
            const keyResult = result[0].key;
            if(modalWrap !== null) {
                modalWrap.remove();
            }

            modalWrap = document.createElement('div');
            modalWrap.className = "modal-wrapper";
            modalWrap.innerHTML = `
                <div class="modal modal-lg fade" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-dark">
                            <div class="modal-body text-end pt-0">
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close" style="margin: 10px 0;"></button>
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/${keyResult}" title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            header.append(modalWrap);

            const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
            modal.show();

            document.querySelector('.modal').addEventListener("click", (e) => {
                if(document.querySelector('.modal').style.display === "block") {
                    document.querySelector('iframe').remove();
                }
                e.stopPropagation();
            });
        } else {
            if(modalWrap !== null) {
                modalWrap.remove();
            }

            modalWrap = document.createElement('div');
            modalWrap.className = "modal-wrapper";
            modalWrap.innerHTML = `
                <div class="modal modal-lg fade" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-dark">
                            <div class="modal-body text-end pt-0">
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close" style="margin: 10px 0;"></button>
                                <p class="text-light text-center my-2 fw-bold">We dont have the trailer yet in our api. Sorry :(</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            header.append(modalWrap);

            const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
            modal.show();
        }
    } catch (message) {
        console.log(message);
    }
};


export { removeElement, setKeyTrailer };