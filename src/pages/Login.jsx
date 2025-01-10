import { useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Navigate } from 'react-router-dom'

const Login = () => {

    // hent signIn-metoden fra context-filen
    // hent også user - så hvis login lykkes => send til admin
    const { signIn, user } = useContext( LoginContext )

    // state til at give besked om forkert login
    //const [ loginfailed, setLoginfailed ] = useState( false )


    // user (kan undværes hvis identity og pw snuppes direkte fra fx e.target.inpIdentity.value)
    const [ identity, setIdentity ] = useState( "" )
    const [ password, setPassword ] = useState( "" )


    // hvis der er en user (= login lykkes) -> send til admin
    if ( user ) return <Navigate to="/admin" replace />


    const handleLogin = ( e ) => {

        e.preventDefault() // undgå reload ved submit



        // let identity = e.target.inpIdentity.value  
        // let password = e.target.inpPW.value        

        signIn( identity, password ) // send brugernavn/email og password til signin-metoden i context

    }


    return (
        <section>
            <h1 className="text-3xl text-center">Login</h1>

            <form onSubmit={ handleLogin } className="m-auto text-light-foreground sm:w-1/2 md:w-1/3">

                <div className="m-4">
                    <input type="text" value={ identity } onChange={ ( e ) => setIdentity( e.target.value ) }
                        required placeholder='Brugernavn eller email (identity)' className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" />
                </div>


                <div className="m-4">

                    <input type="password" value={ password } onChange={ ( e ) => setPassword( e.target.value ) }
                        required placeholder='Password' className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" />

                </div>

                <div className="m-4">
                    <button type="submit" className="inline-block h-auto px-4 py-2 font-semibold text-white bg-transparent border rounded border-tahiti-light hover:bg-tahiti-light hover:text-black hover:border-transparent">LOGIN</button>
                </div>


            </form>



        </section>
    )
}

export default Login