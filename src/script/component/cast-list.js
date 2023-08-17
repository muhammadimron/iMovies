import "./cast-item.js";

class CastList extends HTMLElement {
    set props({ casts }) {
        this._casts = casts;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <p class="fw-bold my-1 fs-6">Casts</p>
            <div class="cast-wrapper-item d-flex flex-row"></div>
        `;

        const wrapper = this.querySelector(".cast-wrapper-item");
        this._casts.forEach(cast => {
            const item = document.createElement("cast-item");
            item.props = { cast: cast };
            wrapper.appendChild(item);
        });
    }
}

customElements.define("cast-list", CastList);