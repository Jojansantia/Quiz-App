import React from 'react';

const Error = ({error,preguntas}) => {
    
        console.log(preguntas);
        
    
    return (  
        <>
            <div className="flex justify-center text-around text-center text-gray-700 text-1xl">
                {error && <h2 className="mx-1 font-bold">{preguntas} -&gt;</h2>}
            <p className="mb-2">{error} </p>
            </div>
        </>
    );
}
 
export default Error;