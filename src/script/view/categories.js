import "../component/search-bar.js";
import "../component/detail-list.js";
import DataSource from "../data/data-source.js";
import { setKeyTrailer } from "../data/util.js";
const bootstrap = require("bootstrap");

const categories = (route, type, category, id = "") => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    let modalWrap = null;
    let detailWrap = null;

    const onButtonSearchClicked = async (e) => {
        try {
            const keyword = document.querySelector("search-bar").value;
            const type = e.target.getAttribute("data-type");
            const category = e.target.getAttribute("data-category");
            const result = await DataSource.getSearchByKeywords(keyword, type, 1);

            if (detailWrap !== null) {
                detailWrap.remove();
            }

            detailWrap = document.createElement("detail-list");
            detailWrap.props = {
                items: result,
                type: type,
                category: category,
                route: route,
                clickTrailer: setKeyTrailer,
                clickMore: onButtonViewMoreSearch
            };
            main.appendChild(detailWrap);
            document.querySelector(".btn-more").setAttribute("data-page", 2);
        } catch (message) {
            console.log(message);
        }
    }

    const onButtonSimilarViewMore = async (e) => {
        try {
            const type = e.target.getAttribute("data-type");
            const category = e.target.getAttribute("data-category");
            let page = Number(e.target.getAttribute("data-page"));
            const results = await DataSource.getSimilarById(type, category, page);

            if (results.length === 0) {
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
                                    <p class="text-light text-center my-2 fw-bold">There is no more. You have see it all :(</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                header.append(modalWrap);
    
                const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
                modal.show();
            }

            e.target.setAttribute("data-page", ++page);
            
            const detail = document.querySelector(".detail");
            results.forEach(item => {
                const cardItem = document.createElement("card-item");
                cardItem.props = {
                    item: item,
                    route: route,
                    clickEvent: setKeyTrailer
                };
                detail.appendChild(cardItem);
            });

        } catch (message) {
            console.log(message);
        }
    }

    const onButtonRecommendationsViewMore = async (e) => {
        try {
            const type = e.target.getAttribute("data-type");
            const category = e.target.getAttribute("data-category");
            let page = Number(e.target.getAttribute("data-page"));
            const results = await DataSource.getRecommendationsById(type, category, page);

            if (results.length === 0) {
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
                                    <p class="text-light text-center my-2 fw-bold">There is no more. You have see it all :(</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                header.append(modalWrap);
    
                const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
                modal.show();
            }

            e.target.setAttribute("data-page", ++page);
            
            const detail = document.querySelector(".detail");
            results.forEach(item => {
                const cardItem = document.createElement("card-item");
                cardItem.props = {
                    item: item,
                    route: route,
                    clickEvent: setKeyTrailer
                };
                detail.appendChild(cardItem);
            });

        } catch (message) {
            console.log(message);
        }
    }

    const onButtonViewMore = async (e) => {
        try {
            const type = e.target.getAttribute("data-type");
            const category = e.target.getAttribute("data-category");
            let page = Number(e.target.getAttribute("data-page"));
            const results = await DataSource.getDetailListByPages(type, category, page);
            
            if (results.length === 0) {
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
                                    <p class="text-light text-center my-2 fw-bold">There is no more. You have see it all :(</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                header.append(modalWrap);
    
                const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
                modal.show();
            }

            e.target.setAttribute("data-page", ++page);
            
            const detail = document.querySelector(".detail");
            results.forEach(item => {
                const cardItem = document.createElement("card-item");
                cardItem.props = {
                    item: item,
                    route: route,
                    clickEvent: setKeyTrailer
                };
                detail.appendChild(cardItem);
            });

        } catch (message) {
            console.log(message);
        }
    }

    const onButtonViewMoreSearch = async (e) => {
        try {
            const keyword = document.querySelector("search-bar").value;
            const type = e.target.getAttribute("data-type");
            let page = Number(e.target.getAttribute("data-page"));
            const results = await DataSource.getSearchByKeywords(keyword, type, page);
            
            if (results.length === 0) {
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
                                    <p class="text-light text-center my-2 fw-bold">There is no more. You have see it all :(</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                header.append(modalWrap);
    
                const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
                modal.show();
            }

            e.target.setAttribute("data-page", ++page);
            
            const detail = document.querySelector(".detail");
            results.forEach(item => {
                const cardItem = document.createElement("card-item");
                cardItem.props = {
                    item: item,
                    route: route,
                    clickEvent: setKeyTrailer
                };
                detail.appendChild(cardItem);
            });

        } catch (message) {
            console.log(message);
        }
    }

    const setSearchBarProps = async (route, type, category) => {
        try {
            const searchBar = document.createElement("search-bar");
            searchBar.props = {
                title: type,
                category: category,
                clickEvent: onButtonSearchClicked
            };

            if (detailWrap !== null) {
                detailWrap.remove();
            }

            const result = await DataSource.getDetailListByPages(type, category, 1);
            detailWrap = document.createElement("detail-list");
            detailWrap.props = {
                items: result,
                type: type,
                category: category,
                route: route,
                clickTrailer: setKeyTrailer,
                clickMore: onButtonViewMore
            };

            main.appendChild(searchBar);
            main.appendChild(detailWrap);
        } catch (message) {
            console.log(message);
        }
    };

    const setSearchOnDetailProps = async (route, type, id, getFunc, searchFunc) => {
        try {
            const searchBar = document.createElement("search-bar");
            searchBar.props = {
                title: type,
                category: category,
                clickEvent: onButtonSearchClicked
            };

            if (detailWrap !== null) {
                detailWrap.remove();
            }

            const result = await getFunc(type, id, 1);
            console.log(result);
            detailWrap = document.createElement("detail-list");
            detailWrap.props = {
                items: result,
                type: type,
                category: id,
                route: route,
                clickTrailer: setKeyTrailer,
                clickMore: searchFunc
            };

            main.appendChild(searchBar);
            main.appendChild(detailWrap);
        } catch (message) {
            console.log(message);
        }
    };

    if (category === "similar") {
        setSearchOnDetailProps(route, type, id, DataSource.getSimilarById, onButtonSimilarViewMore);
    } else if (category === "recommendations") {
        setSearchOnDetailProps(route, type, id, DataSource.getRecommendationsById, onButtonRecommendationsViewMore);
    } else {
        setSearchBarProps(route, type, category);
    }
};

export default categories;