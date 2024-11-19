const API_KEY = '';

const BASE_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    mostPopularByViews: 'mostpopular/v2/viewed/',

};


export async function fetchMostPopularByViews(days = 1) {
    const url =  new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);

    url.searchParams.set('api-key',  API_KEY);

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

// module.exports = {
//     fetchMostPopularByViews
// };