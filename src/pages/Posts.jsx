import { useQuery } from '@tanstack/react-query'

import Loader from '../components/Loader'
import Error from '../components/Error'

// SAMME men med TanStack Query (tidl. React Query)
// ---------------------------------------------------

const fetchPosts = async () => {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts" );
    if ( !response.ok ) {
        throw new Error( 'Network response was not ok' );
    }
    return response.json();
};

const Posts = () => {
    const { data, isLoading, isError, error } = useQuery( {
        queryKey: [ 'posts' ],
        queryFn: fetchPosts,
    } );

    return (
        <section className="text-center">

            <h1 className="my-10 text-3xl">JSONPlaceholder - Posts</h1>

            {/* loading og error */ }
            { isLoading && <Loader /> }
            { isError && <Error errorMessage={ error.message } /> }

            {/* data */ }
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                { data && data.map( p => (

                    <div key={ p.id } className="p-10 transition-all duration-500 border shadow-md border-tahiti-dark hover:scale-105 group hover:bg-tahiti-dark">
                        <h2 className="my-6 text-3xl group-hover:text-white text-tahiti-light" >{ p.title }</h2>
                        <div>{ p.body }</div>
                    </div>

                ) ) }
            </div>
        </section>
    );
};

export default Posts;
