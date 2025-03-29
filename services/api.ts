export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers : {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    }
}

export const fetchMovies = async (query : {query: string}) => {
    const endpoint = query ?
        `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query.query)}` : 
        `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, 
        {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        }
    ); 
    if(!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
}


// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjZjYzFlZTY0Zjc3Y2NhMjc5YjJmODhjMDUyMGI5MSIsIm5iZiI6MTc0MzI0NjE4Ni4yOTQwMDAxLCJzdWIiOiI2N2U3ZDM2YWEzZDhjYzkyOGU2N2JkNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OmvTZH5H97DR85S3tMM6rFIljVZQg_gkK_AH1wRFPeQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));