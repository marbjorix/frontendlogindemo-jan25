import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {


    return (
        <section className="container flex flex-col items-stretch justify-between min-h-screen mx-auto text-white center bg-dark-background">

            <Header />
            <main className="px-4 py-16 sm:px-6 lg:px-8 bg-dark-background">
                {/* <main className="container px-2 m-5 border border-green-400"> */ }
                <Outlet />
            </main>
            <Footer />

        </section>
    )
}

export default Layout