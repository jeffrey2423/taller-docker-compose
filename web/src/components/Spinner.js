import React from 'react'

const Spinner = (props) => {
    return (
        <React.Fragment>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        </React.Fragment>
    )
}

export default Spinner