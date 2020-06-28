import React from 'react';
import Pregunta from './Pregunta';

const Quiz = () => {

    return ( 
        <>
            <div className="border mt-5 text-center">
            
                <h1 className="text-center my-2">
                    Vocabulary Game
                </h1>

                <Pregunta/>
                
            </div>
        </>
    );
}
 
export default Quiz;