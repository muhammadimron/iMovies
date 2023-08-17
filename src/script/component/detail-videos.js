import "./video-item.js";

class DetailVideos extends HTMLElement {
    set props({ videos }) {
        this._videos = videos;
        this.render();
    }
    
    render() {
        this._videos.forEach(video => {
            const item = document.createElement("video-item");
            item.props = { video: video };
            this.appendChild(item);
        });
    }
}

customElements.define("detail-videos", DetailVideos);