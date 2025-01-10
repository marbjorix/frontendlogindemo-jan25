import React from 'react'
import Title from './Title'

const Error = ( { errorMessage } ) => {
    return (

        <div>
            <Title titleText="Der er fejl" />
            <p>Der er opstået en fejl ... vi beklager. Genstart internettet eller kontakt Googles hotline!</p>
            <p className="text-sm">Fejl: { errorMessage }</p>
        </div>

    )
}

export default Error