import "./card-item.js";

class DetailList extends HTMLElement {
    set props({ items, type, category, route, clickTrailer, clickMore }) {
        this._items = items;
        this._type = type;
        this._category = category;
        this._route = route;
        this._clickTrailer = clickTrailer;
        this._clickMore = clickMore;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .detail-wrapper {
                    background: black;
                }

                .btn-more,
                .btn-more:hover {
                    background: var(--primary);
                    color: #fff;
                    font-weight: bold;
                    border-radius: 3rem;
                    width: 10rem;
                }

                .btn-more:hover {
                    box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                    -webkit-box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                    -moz-box-shadow: 0px 0px 9px 2px rgba(253,207,207,0.79);
                }

                @media screen and (max-width: 990px) {
                    .btn-more,
                    .btn-more:hover {
                        font-size: 0.8rem;
                        width: 8rem;
                    }
                }
            </style>

            <div class="detail-wrapper text-center">
                <div class="detail row row-cols-auto justify-content-center mx-auto"></div>
                <button class="btn btn-more mb-4" type="button" data-type="${this._type}" data-category="${this._category}" data-page="2">View More</button>
            </div>
        `;

        const detail = this.querySelector(".detail");
        this._items.forEach(item => {
            const cardItem = document.createElement("card-item");
            cardItem.props = {
                item: item,
                clickEvent: this._clickTrailer,
                route: this._route
            };
            detail.appendChild(cardItem);
        });

        this.querySelector(".btn-more").addEventListener("click", this._clickMore);
    }
}

customElements.define("detail-list", DetailList);