import { useState } from 'react'
import axios from 'axios'

// Brug evt. axios base - hvis server/apis url er den samme
//let axiosBase = axios.create( { baseURL: "http://localhost:8090/5005/" } )

const useRequestData = () => {

    // Håndter om vi venter på data = loader true el. false
    const [ isLoading, setIsLoading ] = useState( false )

    // Når der er data fra et API indlæses de i staten her
    const [ data, setData ] = useState( null )

    // Hvis der opstår fejl sætter vi denne til true
    const [ error, setError ] = useState( false )


    const makeRequest = async ( url, method = "GET", headers = null, params = null, body = null ) => {

        let response

        setIsLoading( true ) // vi sætter loading-tilstand til true mens api'et "ringes op"

        // KUN TIL TEST af fx loader: Forsinkelse på x antal sekunder
        //await new Promise( resolve => setTimeout( resolve, 1000 ) );

        try {

            if ( method === "GET" ) {

                response = await axios.get( url, { headers: headers, params: params } )
            }

            else if ( method === "POST" ) {

                response = await axios.post( url, body, { headers: headers, params: params } )
            }

            else if ( method === "PUT" ) {

                response = await axios.put( url, body, { headers: headers, params: params } )
            }

            else if ( method === "PATCH" ) {

                response = await axios.patch( url, body, { headers: headers, params: params } )
            }

            else if ( method === "DELETE" ) {

                response = await axios.delete( url, { headers: headers, params: params } )

                // Her håndterer vi DELETE-responsen, hvis der er status 204
                if ( response.status === 204 ) {
                    // Hvis 204 No Content, betyder det succes, men uden body
                    setData( { success: true, message: "Der blev slettet" } )
                    setError( false )
                    return // returner her for at stoppe videre behandling
                }

            } else {

                throw new Error( "Invalid method - GET-request was expected" )

            }

            setData( response.data )
            setError( false )

        } catch ( error ) {

            setData( null )   // tøm data fordi der er en fejl
            setError( true )  // der er fejl
            console.log( error )

        } finally {

            setIsLoading( false ) // slut med at loade - api'et har svaret med enten error eller data
        }

    }

    return { makeRequest, isLoading, data, error }

}

export default useRequestData