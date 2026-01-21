import MovieList from "../components/MovieList";

export default function Search(params) {
  return (
    <>
      <section className="my-24">
        <MovieList list="now_playing" title="Assistido agora" />
        <MovieList list="top_rated" title="Filmes mais bem avaliados" />
      </section>
    </>
  );
}
