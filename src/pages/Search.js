import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")
  const { data:movies } = useFetch(apiPath,queryTerm)
  
  
  useEffect(() => {
    document.title = `Search result for ${queryTerm} / NETFLIK`
  })
 
  return (
    <main>
       <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{ movies.length === 0 ? `No results found for '${queryTerm}'` : `results for '${queryTerm}'` }</p>
       </section>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">  
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />    
          ) ) };    
          </div>
        </section>
      </main>
  )
}
