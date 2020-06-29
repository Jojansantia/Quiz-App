import React from 'react';
import Pregunta from './Pregunta';

const Quiz = () => {

    return ( 
        <>
            <div className="border mt-5 text-center">
            
                <h1 className="text-center text-gray-700 text-3xl font-bold">
                    Preguntas de cultura general
                </h1>

                <Pregunta/>
                
            </div>
        </>
    );
}
 
export default Quiz;