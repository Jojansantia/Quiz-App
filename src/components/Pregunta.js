import React, {useState} from 'react';
import Error from './Error';
import { Line } from 'rc-progress';

const Pregunta = () => {

    const [respuesta, guardarRespuesta] = useState('')
    
    const [preguntas] = useState([
        "¿Quién escribió La Odisea?",
        "¿En qué país se encuentra la torre de Pisa?",
        "¿Cuál es el país más grande del mundo?",
        "Si 50 es el 100%, ¿Cuánto es el 90%?"
    ])
    const [respuestas] = useState(["Homero","Italia","Rusia", "45"])
    const [errores, guardarErrores] = useState(["","","",""])
    
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
            errores[num]= respuestas[num]
            console.log(errores[num]);
            
            guardarRespuesta('')
            cambiarnum(num+1)
        }
    }

    return (  
        <>
        <div className="flex my-2 justify-center px-6">
                        <Line className="w-11/12" percent={num*25} strokeWidth="4" strokeColor='#3FC7FA' />
                        <h3 className="w-1/12 ml-3">{num*25}%</h3>
                    </div>
            {num !== 4 ?
                <>
                    

                    <div className="flex justify-between px-6 my-2 text-gray-700 text-2xl font-bold">
                        <p>Level {num+1}</p>
                        <p>{num+1}/4</p>
                    </div>
                    <label className=" text-gray-700 text-1xl font-bold ">
                            {preguntas[num]}
                        </label> 
                    <form onSubmit={handleSubmit}>
                     
                    <div className="flex justify-around my-2">

                        <input
                            className="border w-3/5 mb-2 p-2 rounded"
                            type="text"
                            name="pregunta"
                            placeholder="Responde aquí"
                            onChange={e => guardarRespuesta(e.target.value)}
                            value={respuesta}
                            
                        />
                        <button
                            type="sumbit "
                            className="w-1/5 bg-green-600 mb-2 p-2 text-white rounded hover:bg-green-800"
                        >
                            Next
                        </button>
                    </div>

                    </form>
                </>
            :
            <>
<h1 className="text-center text-gray-700 text-2xl font-bold my-2">
                    Respuestas correctas
                </h1>
                {errores.map((error, i) => (
                        <Error
                            preguntas={preguntas[i]}
                            key={i}
                            error={error}
                        />
                ))}
                </>
            }
            
        </>
    );
}
 
export default Pregunta;