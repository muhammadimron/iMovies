import "../component/category-header.js";
import "../component/card-list.js";

class FilmCategories extends HTMLElement {
    set props({ items, type, category, clickEvent, route }) {
        this._title = this.getAttribute('class') || '';
        this._type = type;
        this._category = category;
        this._items = items;
        this._clickEvent = clickEvent;
        this._route = route;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <style>
                .categories-wrapper{
                    background: #000;
                }
            </style>
            <div class="categories-wrapper py-3"></div>
        `;

        const header = document.createElement('category-header');
        header.props = { 
            title: this._title,
            type: this._type,
            category: this._category,
            clickEvent: this._route
        };

        const list = document.createElement('card-list');
        list.props = { 
            items: this._items,
            clickEvent: this._clickEvent,
            route: this._route
        };

        const wrapper = this.querySelector('.categories-wrapper');
        wrapper.appendChild(header);
        wrapper.appendChild(list);
    }

    renderLoading() {
        this.innerHTML = `
            <p>Loading ...</p>
        `;
    }
}

customElements.define('film-categories', FilmCategories);