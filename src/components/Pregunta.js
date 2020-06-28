import React, {useState} from 'react';
import Error from './Error';

const Pregunta = () => {

    const [respuesta, guardarRespuesta] = useState('')
    
    const [preguntas] = useState(["¿Cómo te llamas?","¿Cúal es tu apellido?","¿Cúantos años tienes?"])
    const [respuestas] = useState(["Jojan","Guzman","21"])
    const [errores, guardarErrores] = useState([])
    
    const [num, cambiarnum] = useState(0)
    
    // const [pregunta, cambiarPregunta] = useState(preguntas[0])

    // useEffect(() => {
    //     cambiarPregunta(preguntas[num])
    // }, [num, preguntas]);
    
    const handleSubmit = e => {
        e.preventDefault();
        if(respuesta === respuestas[num]){
            guardarRespuesta('')
            cambiarnum(num+1)
        }else{
            guardarErrores([...errores, respuestas[num]])
            guardarRespuesta('')
            cambiarnum(num+1)
        }
    }

    console.log(errores);
    console.log(num);
    
    return (  
        <>
            {num !== 4 ?
                <>
                    <div className="flex justify-around my-2">
                        <p>Level {num+1}</p>
                        <p>{num+1}/4</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="float-left  ml-8 my-2">
                            {preguntas[num]}
                        </label>
                    
                        <input
                            className="border w-4/5 mb-2 p-2 mr-3 rounded"
                            type="text"
                            name="pregunta"
                            placeholder="Responde aquí"
                            onChange={e => guardarRespuesta(e.target.value)}
                            value={respuesta}
                            
                        />
                        <button
                            type="sumbit "
                            className="  bg-green-600 p-2 text-white rounded"
                        >
                            Next
                        </button>
                    </form>
                </>
            :
                errores.map((error, i) => (
                        <Error
                        key={i}
                        error={error}
                        />
                ))
            }
        </>
    );
}
 
export default Pregunta;