import "regenerator-runtime";
import 'owl.carousel';
import "./styles/style.scss";
import { removeElement } from './script/data/util.js';
import './script/component/nav-bar.js';
import main from './script/view/main.js';
import movie from './script/view/movie.js';
import tv from './script/view/tv.js';
import categories from './script/view/categories.js';
import detail from './script/view/detail.js';
import './script/component/thank-footer.js';

document.addEventListener('DOMContentLoaded', function(){
    const handleLocation = (route) => {
        const path = window.location.pathname;

        if(path === "/" || path === "/index.html" || path === "") {
            removeElement();
            main(route);
        } else if (path === "/movie") {
            removeElement();
            movie(route);
        } else if (path === "/tv") {
            removeElement();
            tv(route);
        } else {
            const pathArray = path.split("/")

            if (Number(pathArray[2])) {
                removeElement();
                detail(route, pathArray[1], pathArray[2]);
            } else {
                if(pathArray[2] === "similar" || pathArray[2] === "recommendations") {
                    console.log(pathArray);
                    removeElement();
                    categories(route, pathArray[1], pathArray[2], pathArray[3]);
                } else {
                    removeElement();
                    categories(route, pathArray[1], pathArray[2]);
                }
            }

        }
    };

    const route = (event) => {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        handleLocation(route);
    }
    
    window.onpopstate = handleLocation;
    window.route = route;

    const nav = document.querySelector('nav-bar');
    nav.props = { clickEvent: route };

    handleLocation(route);
});