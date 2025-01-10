import { useState } from 'react'

const Home = () => {

    // simuleret fejl
    //throw new Error( "Simulated error in Home component!" );



    return (

        <section className="text-center ">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there - this is Home calling!</h1>
            </div>
        </section>
    )
}

export default Home