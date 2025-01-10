import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'



const LogoutButton = () => {

    const { signOut } = useContext( LoginContext )


    return (
        <button onClick={ signOut }>Logud</button>
    )
}

export default LogoutButton