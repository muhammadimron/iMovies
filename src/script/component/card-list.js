import "./card-item.js";

class CardList extends HTMLElement {
    set props({ items, clickEvent, route }) {
        this._items = items;
        this._clickEvent = clickEvent;
        this._route = route;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <div class="owl-carousel owl-theme"></div>
        `;

        const list = this.querySelector('.owl-carousel');
        this._items.forEach(item => {
            const cardItem = document.createElement('card-item');
            cardItem.props = {
                item: item,
                clickEvent: this._clickEvent,
                route: this._route
            };
            list.appendChild(cardItem);
        });

        $(function() {
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    335:{
                        items:2
                    },
                    470:{
                        items:3
                    },
                    650:{
                        items:4
                    },
                    800:{
                        items:5
                    },
                    970:{
                        items:6
                    },
                    1120:{
                        items:7
                    },
                    1270:{
                        items:8
                    }
                }
            });
        });
    }
}

customElements.define('card-list', CardList);