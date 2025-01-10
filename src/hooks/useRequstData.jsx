import { useState } from 'react';
import axios from 'axios';

// axios instans med en baseURL og standard headers
const axiosInstance = axios.create( {
    baseURL: "http://localhost:8090/5005/", // base URL
    headers: {
        'Content-Type': 'application/json',
        // autorisation header (fx JWT), kan tilføjes her
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
} );

const useRequestData = () => {
    // Håndter om vi venter på data = loader true el. false
    const [ isLoading, setIsLoading ] = useState( false );

    // Når der er data fra et API indlæses de i staten her
    const [ data, setData ] = useState( null );

    // Hvis der opstår fejl sætter vi denne til true
    const [ error, setError ] = useState( false );



    // Ring API'et op ...
    const makeRequest = async ( url, method = "GET", headers = null, params = null, body = null ) => {

        setIsLoading( true ); // Vi sætter loading-tilstand til true mens API'et "ringes op"

        // --- #1 Hvis der både skal være baseURL OG mulighed for at sende en helt anden url (= indeholder http) med

        // Hvis URL'en indeholder "http", betyder det, at den er en fuld URL
        const isFullUrl = /^https?:\/\//i.test( url );

        // Hvis URL'en er relativ (uden http/https), tilføj baseURL
        const requestUrl = isFullUrl ? url : axiosInstance.defaults.baseURL + url;

        const config = {
            method,
            url: requestUrl, // Brug den fulde URL eller den kombinerede relativ URL
            headers: { ...axiosInstance.defaults.headers, ...headers },
            params,
            data: body,
        };

        // --- #2 hvis det er nok med bare baseurl ELLER udkommenter baseurl og brug url fra param
        // const config = {
        //     method,
        //     url,
        //     headers: { ...axiosInstance.defaults.headers, ...headers },
        //     params,
        //     data: body,
        // };

        try {

            const response = await axiosInstance( config );
            setData( response.data );
            setError( false ); // Reset error if the request was successful

        } catch ( err ) {

            setData( null ); // Tøm data, da der er en fejl
            setError( true ); // Sæt fejlstatus
            console.error( "API request failed:", err );

        } finally {

            setIsLoading( false ); // Slut med at loade - API'et har svaret med enten fejl eller data

        }
    };

    return { makeRequest, isLoading, data, error };
};

export default useRequestData;
