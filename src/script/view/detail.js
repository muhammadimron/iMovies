import "../component/detail-hero.js";
import "../component/detail-videos.js";
import "../component/film-categories.js";
import DataSource from "../data/data-source.js";
import { setKeyTrailer } from "../data/util.js";

const detail = async (route, type, id) => {
    const main = document.querySelector('main');

    const setHeroProps = async (type, id) => {
        try {
            const detail = await DataSource.getDetailById(type, id);
            const casts = await DataSource.getCreditById(type, id);
            const castsSliced = casts.sort((a, b) => {
                return b.popularity - a.popularity;
            }).slice(0,4);

            const hero = document.createElement("detail-hero");
            hero.props = {
                detail: detail,
                casts: castsSliced
            };

            main.appendChild(hero);
        } catch (message) {
            console.log(message);
        }
    };

    const setVideoProps = async (type, id) => {
        try {
            const results = await DataSource.getTrailer(type, id);
            
            const unique = [];
            const videos = [];
            for (let i=0; i<results.length; i++) {
                if (!(results[i].type in unique)) {
                    unique.push(results[i].type);
                    videos.push(results[i]);
                }
            }

            const videoElement = document.createElement("detail-videos");
            if (videos.length < 3){
                videoElement.props = {
                    videos: videos
                };
            } else {
                videoElement.props = {
                    videos: videos.slice(0,3)
                };
            }

            main.appendChild(videoElement);
        } catch (message) {
            console.log(message);
        }
    };

    const setCategories = async (name, type, id, getFunc, route) => {
        try {
            const result = await getFunc(type, id, 1);

            const categories = document.createElement("film-categories");
            categories.className = name;
            categories.props = {
                items: result,
                type: type,
                category: id,
                clickEvent: setKeyTrailer,
                route: route
            };
            
            main.appendChild(categories);
        } catch (message) {
            console.log(message);
        }
    };

    await setHeroProps(type, id);
    await setVideoProps(type, id);
    await setCategories("similar", type, id, DataSource.getSimilarById, route);
    await setCategories("recommendations", type, id, DataSource.getRecommendationsById, route);
};

export default detail;