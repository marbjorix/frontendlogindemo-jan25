import { useEffect, useState, useContext } from 'react'
import { NavLink, Route } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'
import { LoginContext } from '../context/LoginContext'

// TODO: fjern det der går at offcanvas menu vises og forsvinder ved skift fra alm. nav til burger


// react-icons - husk: npm i react-icons
import { GiHamburgerMenu, GiHomeGarage } from "react-icons/gi"


const Navbar = () => {

    const { user } = useContext( LoginContext )

    const [ showMenu, setShowMenu ] = useState( false )



    return (
        <nav className="relative z-10 border-b border-white/20 ">


            <div className="flex items-center justify-between px-4 py-4">

                <div className="flex gap-2 ml-5 text-xl font-bold uppercase">
                    <svg className="w-8 text-teal-accent-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none" > <rect x="3" y="1" width="7" height="12" /> <rect x="3" y="17" width="7" height="6" /> <rect x="14" y="1" width="7" height="6" /> <rect x="14" y="11" width="7" height="12" /> </svg>
                    LoginDemo A/S
                </div>

                {/* BURGER BUTTON */ }
                <button onClick={ () => setShowMenu( !showMenu ) } className="mr-2 md:hidden">
                    <GiHamburgerMenu size="2rem" />
                </button>


                {/* <menu className="absolute top-0 left-0 flex-col h-screen p-10 bg-emerald-900 "> */ }
                {/* md breakpoint skift til row */ }
                <menu onClick={ () => setShowMenu( !showMenu ) }
                    className={ `absolute top-0 flex-col md:flex-row md:bg-transparent md:h-auto md:flex md:left-0 md:static h-screen md:p-0 p-10 ${ showMenu === true ? "left-0" : "-left-full" } transition-all duration-1000 bg-emerald-900` }>

                    <li className="mx-4 my-5">
                        <NavLink to="/"><GiHomeGarage size={ "2rem" } /></NavLink>
                    </li>

                    <li className="mx-4 my-5">
                        <NavLink to="/posts">Posts</NavLink>
                    </li>


                    {/* Vis kun LOGIN hvis man IKKE er logget ind */ }
                    {
                        !user &&
                        <li className="mx-4 my-5">
                            <NavLink to="login" className="mx-2 btn btn-sm btn-success">LOGIN</NavLink>
                        </li>
                    }

                    {/* Vis kun LOGUD og ADMIN-link hvis bruger ikke er logget ind */ }
                    {
                        user &&
                        <>
                            <li className="mx-4 my-5">
                                <LogoutButton />
                            </li>
                            <li className="mx-4 my-5">
                                <NavLink to="admin">ADMIN</NavLink>
                            </li>
                        </>
                    }

                    {/* dropdown - husk class relative og group */ }
                    {/* 
                        <li className="relative mx-4 my-5 group">
                            ⮟ JSONPlaceholder

                            <menu className="w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap">
                                <li className="mx-4 my-5">
                                    <NavLink to="/posts">Vis posts</NavLink>
                                </li>
                                <li className="mx-4 my-5">
                                    <NavLink to="/photos" >Photos</NavLink>
                                </li>
                                <li className="mx-4 my-5">
                                    <NavLink to="/todos" >Todos</NavLink>
                                </li>
                                <li className="mx-4 my-5">
                                    <NavLink to="/albums" >Album</NavLink>
                                </li>
                            </menu>

                        </li> 
                        */}
                </menu>
            </div>

        </nav>
    )
}

export default Navbar