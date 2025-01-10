import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext()


// HUSK: Skal tilføjes til main.jsx
const LoginContextProvider = ( props ) => {

    const [ user, setUser ] = useState()


    console.log( "CONTEXT HER!" )


    // tjek om login ligger i localstorage
    useEffect( () => {
        console.log( "context - useeffect - localstorage-tjek" )
        if ( !user && localStorage.getItem( 'user' ) ) {
            setUser( JSON.parse( localStorage.getItem( 'user' ) ) )
        }
    }, [] )



    const signIn = ( identity, password ) => {

        // kontakt API - send identity og password med og afvent om det er godkendt ...

        if ( identity === "admin" && password === "abc123" ) {

            setUser( identity )
            localStorage.setItem( 'user', JSON.stringify( identity ) ); // Gem bruger i localStorage

        } else {
            //setUser() // ingen bruger = ingen login!
            signOut()
        }
    }


    // Log ud
    const signOut = () => {
        setUser() // tøm state = ikke logget ind
        localStorage.removeItem( 'user' )
    }


    return (
        <LoginContext.Provider value={ { signIn, signOut, user } }>
            {/* App.jsx! */ }
            {/* props.children er App og alle dens children */ }
            { props.children }
        </LoginContext.Provider>
    )

}

export default LoginContextProvider