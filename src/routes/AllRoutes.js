import { Route,Routes } from "react-router-dom";
import {MovieList,MovieDetail,Filter,PageNotFound} from "../pages/index";



export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
        <Route path="/" element={<MovieList title="Home"/>}/>
        <Route path="movie/:id" element={<MovieDetail />}  />
        <Route path="movies/popular" element={<MovieList title="Popular"/>} />
        <Route path="movies/top" element={<MovieList title="Top Rated"/>} />
        <Route path="movies/upcoming" element={<MovieList title="Upcoming" />} />
        <Route path="search" element={<Filter />} />
        <Route path="*" element={<PageNotFound />} />

    </Routes>
    </div>
  )
}


