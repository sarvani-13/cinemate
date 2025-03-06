import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get('q');
    const { data: movies } = useFetch(apiPath, queryTerm);

    useTitle(`Search result for ${queryTerm} / Cinemate`);

  return (
    <main>
        <section className="py-7">
            <p className="text-3xl text-grey-700 dark:text-white">{movies.length === 0 ? `No results found for ${queryTerm}`: ''}</p>
        </section>
        <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
            {movies.map(movie => (
            <Card key={movie.id} movie={movie}/>
            ))}
        </div>
        </section>
  </main>
  )
}
