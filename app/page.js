import MovieList from "./components/MovieList";
import Overview from "./components/Overview";
import TVList from "./components/TVList";

export default function Home(params) {
  return (
    <>
      <Overview />
      <MovieList list="now_playing" title="Assistido agora" />
      <MovieList list="popular" title="Filmes populares" />
      <MovieList list="upcoming" title="Próximos filmes" />
      <MovieList list="top_rated" title="Filmes mais bem avaliados" />
      <TVList list="popular" title="Séries de TV populares" />
      <TVList list="top_rated" title="Séries de TV mais bem avaliadas" />
    </>
  );
}
