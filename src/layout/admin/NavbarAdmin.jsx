import { NavLink } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'


const NavbarAdmin = ( { user } ) => {




    return (
        <nav className="flex flex-col justify-between w-1/5 h-screen min-h-screen p-6 text-white bg-gray-800">
            <div>
                <div className="mb-6">
                    <a className="text-xl font-bold">Project A/S</a>
                </div>

                <menu className="space-y-4">
                    <li>
                        <NavLink to="admin" className="px-4 py-2 text-white rounded hover:bg-gray-700">ADMIN Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="px-4 py-2 text-white rounded hover:bg-gray-700">Forsiden (public)</NavLink>
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </menu>
            </div>
            <div>
                <h2>Du er logget ind som <code className="text-tahiti-light">{ user }</code></h2>
            </div>

        </nav >
    )
}

export default NavbarAdmin