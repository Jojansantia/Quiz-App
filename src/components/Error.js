import React from 'react';

const Error = ({error, preguntas}) => {
    
    return (  

        <>
            <div className="text-center text-around text-center text-gray-700 text-1xl">
                {error && <p className="mx-1 font-bold">{preguntas}</p>}
                <h3 className="mb-1">R//: {error}</h3>
            </div>
        </>

    );

}
 
export default Error;