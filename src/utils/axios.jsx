import axios from "axios";

// 712814da77ce543fe895d71f8a663c0f
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTI4MTRkYTc3Y2U1NDNmZTg5NWQ3MWY4YTY2M2MwZiIsIm5iZiI6MTcyMjIwNzAzOC4xOTM4NjMsInN1YiI6IjY0NTRkZDgyODdhMjdhMDExYjE0NDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CAXcHcSw0TNnbUpyIup7rgR-liENdEGhmO7veUxXsgY'
      }
});

export default instance;