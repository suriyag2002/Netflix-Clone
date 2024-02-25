import { Routes,Route } from "react-router-dom";

import { MovieDetail,MovieList,PageNotFound,Search} from '../pages'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-900">
      <Routes >
        <Route path="/" element={<MovieList apiPath="movie/popular" title="Home" />}/>
        <Route path="movie/:id" element={<MovieDetail />}/>
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}/>
        <Route path="search" element={<Search apiPath="search/collection"/>}/>
        <Route path="*" element={<PageNotFound title="page Not Found"/>}/>
      </Routes>
    </div>
    )
}
