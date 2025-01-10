import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin'

import { LoginContext } from '../../context/LoginContext'

const LayoutAdmin = () => {


    const { user } = useContext( LoginContext )

    // Skrid hvis der ikke er en user!!!
    if ( !user ) return <Navigate to="/login" replace />


    return (
        <section className="mx-auto bg-dark-background">

            <div className="flex">

                <NavbarAdmin user={ user } />

                <main className="px-2 m-5 ">
                    <Outlet />
                </main>
            </div>

        </section>
    )
}

export default LayoutAdmin