class VideoItem extends HTMLElement {
    set props({ video }) {
        this._video = video;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <style>
                .video-item-content {
                    background: black;
                    color: white;
                }

                .video-item-content h5 {
                    font-size: 2rem;
                }

                .video-wrapper {
                    width: 60%;
                }

                @media screen and (max-width: 1100px) {
                    .video-item-content h5 {
                        font-size: 1.5rem;
                    }
                }

                @media screen and (max-width: 767px) {
                    .video-wrapper {
                        width: 80%;
                    }
                }
            </style>

            <div class="video-item-content text-center">
                <h5 class="fw-bold pt-5 pb-2">${this._video.type}</h5>
                <div class="video-wrapper mx-auto">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/${this._video.key}" title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("video-item", VideoItem);