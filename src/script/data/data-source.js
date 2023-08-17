const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=9799fcc708ce51cc17a71b8665aae2cc';

class DataSource {
    static getSlide(){
        return fetch(`${BASE_URL}/trending/all/day?${API_KEY}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    if (responseJson.results) {
                      return Promise.resolve(responseJson.results);
                    } else {
                      return Promise.reject(`trending is not found`);
                    }
                });
    }

    static getSlideMovies(){
      return fetch(`${BASE_URL}/movie/now_playing?${API_KEY}`)
              .then(response => {
                  return response.json();
              })
              .then(responseJson => {
                  if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                  } else {
                    return Promise.reject(`trending is not found`);
                  }
              });
    }

    static getTrailer(type, id){
      return fetch(`${BASE_URL}/${type}/${id}/videos?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`trailer is not found`);
                }
              });
    }

    static getPopularMovies(){
      return fetch(`${BASE_URL}/movie/popular?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }

    static getOnAiredTv(){
      return fetch(`${BASE_URL}/tv/on_the_air?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }

    static getPopularTv(){
      return fetch(`${BASE_URL}/tv/popular?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`popular tv is not found`);
                }
              });
    }

    static getTopRatedMovies(){
      return fetch(`${BASE_URL}/movie/top_rated?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`top rated movie is not found`);
                }
              });
    }

    static getTopRatedTv(){
      return fetch(`${BASE_URL}/tv/top_rated?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`top rated tv is not found`);
                }
              });
    }

    static getUpcomingMovies(){
      return fetch(`${BASE_URL}/movie/upcoming?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`upcoming movie is not found`);
                }
              });
    }

    static getSearchByKeywords(keyword, type, page){
      return fetch(`${BASE_URL}/search/${type}?${API_KEY}&query=${keyword}&page=${page}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`${type} is not found`);
                }
              });
    }

    static getDetailListByPages(type, category, page){
      return fetch(`${BASE_URL}/${type}/${category}?${API_KEY}&page=${page}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }

    static getDetailById(type, id){
      return fetch(`${BASE_URL}/${type}/${id}?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson) {
                  return Promise.resolve(responseJson);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }

    static getCreditById(type, id){
      return fetch(`${BASE_URL}/${type}/${id}/credits?${API_KEY}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.cast) {
                  return Promise.resolve(responseJson.cast);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }

    static getSimilarById(type, id, page){
      return fetch(`${BASE_URL}/${type}/${id}/similar?${API_KEY}&page=${page}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }

    static getRecommendationsById(type, id, page){
      return fetch(`${BASE_URL}/${type}/${id}/recommendations?${API_KEY}&page=${page}`)
              .then(response => {
                return response.json();
              })
              .then(responseJson => {
                if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`movies is not found`);
                }
              });
    }
}

export default DataSource;