// custom-tailwind-plugin.js
module.exports = function ( { addComponents, addUtilities } ) {
    // Tilføj brugerdefinerede komponenter
    addComponents( {
        // TABEL
        'table': {
            // width: '100%',
            borderCollapse: 'collapse',
            // tableLayout: 'fixed'
        },
        'table caption': {
            fontSize: '3.5em',
            margin: '10px'
        },
        'table thead tr th': {
            backgroundColor: '#d0d0d0'
        },
        'table th, table td': {
            padding: '10px',
            border: '1px solid #a0a0a0',
            fontSize: '1em',
        },
        'table tr:nth-child(even)': {
            background: '#f0f0f0',
            padding: '10px'
        },
        'table tr:nth-child(odd)': {
            background: '#fff'
        },
        'table tr:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)' // Let mørkere ved hover
        },
        // FORMULAR
        'form input, form textarea': {
            border: '1px solid gray',
            padding: '5px'
        }
    } )


};
