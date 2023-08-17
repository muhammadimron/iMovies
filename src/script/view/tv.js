import "../component/movie-slide.js";
import "../component/film-categories.js";
import DataSource from "../data/data-source.js";
import { setKeyTrailer } from "../data/util.js";

const tv = () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    const setMovieProps = async () => {
        try {
            const result = await DataSource.getPopularTv();
            const sliceResult = result.slice(0, 5);

            const movieSlide = document.createElement('movie-slide');
            const props = {
                slides: sliceResult,
                event: setKeyTrailer,
            };
            movieSlide.props = props;

            header.appendChild(movieSlide);
        } catch (message) {
            console.log(message);
        }
    };
    
    const setCategoriesProps = async (name, type, category, getFunc, route) => {
        try {
            const result = await getFunc();
            
            const categories = document.createElement('film-categories');
            categories.className = name;
            categories.props = {
                items: result,
                type: type,
                category: category,
                clickEvent: setKeyTrailer,
                route: route
            };
            
            main.appendChild(categories);
        } catch (message) {
            console.log(`category error: ${message}`);
        }
    };

    setMovieProps();
    setCategoriesProps("top rated tv", "tv", "top_rated", DataSource.getTopRatedTv, route);
    setCategoriesProps("popular tv", "tv", "popular", DataSource.getPopularTv, route);
    setCategoriesProps("on air tv", "tv", "on_the_air", DataSource.getOnAiredTv, route);
};

export default tv;