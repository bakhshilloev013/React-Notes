import React from 'react'

function Card() {
    // return (
    //     <div>
    //         <h1>Shelby</h1>
    //         <h3>I learn React fragments!</h3>
    //         <button>More</button>
    //     </div>
    // );

    // return (
    //     <>
    //         <h1>Shelby</h1>
    //         <h3>I learn React fragments!</h3>
    //         <button>More</button>
    //     </>
    // );

    return (
        <React.Fragment>
            <h1>Shelby</h1>
            <h3>I learn React fragments!</h3>
            <button>More</button>
        </React.Fragment>
    );


}

export default Card;
