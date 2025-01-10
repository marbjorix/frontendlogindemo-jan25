import { useEffect } from 'react'
import useRequestData from '../hooks/useRequstData'

import Loader from '../components/Loader'
import Error from '../components/Error'

const Posts = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect( () => {

        makeRequest( "https://jsonplaceholder.typicode.com/posts" )

    }, [] )

    // se todos her C:\Marianne\asp.net\_REACT\_DATASERVICE-BACKEND-FILEUPLOAD\2024-10-dataservice\reactintro-tw\src\pages\jsonplaceholder\Todos.jsx
    return (
        <section className="text-center ">

            <h1 className="text-3xl">JSONPlaceholder - todos</h1>

            { isLoading && <Loader /> }
            { error && <Error /> }

            {/* data */ }
            <div className="grid grid-cols-1 gap-3 mt-10 sm:grid-cols-2 md:grid-cols-3">
                { data && data.map( t =>
                    <div key={ t.id } className={ `p-4 border-4 border-tahiti-dark ` }>
                        <h2 className="py-3 text-2xl">{ t.title }  </h2>
                        <div> { t.body }</div>
                    </div>
                ) }
            </div>
        </section>
    )
}

export default Posts