import React, {useState} from 'react';
import Error from './Error';
import { Line } from 'rc-progress';

const Quiz = () => {

    const [num, cambiarnum] = useState(0)
    const [alerta, cambiarAlerta] = useState(false)
    const [respuesta, guardarRespuesta] = useState('')
    const [respuestas] = useState(["Homero", "Italia", "Rusia", "45"])
    const [errores] = useState(["", "", "", ""])
    const [preguntas] = useState([
        "¿Quién escribió La Odisea?",
        "¿En qué país se encuentra la torre inclinada de Pisa?",
        "¿Cuál es el país más grande del mundo?",
        "Si 50 es el 100%, ¿Cuánto es el 90%?"
    ])
    
    const handleSubmit = e => {
        e.preventDefault();
        if(respuesta.trim() === ''){
            cambiarAlerta(true)
            setTimeout(() => {
                cambiarAlerta(false)
            }, 2000);
            return;
        }
        if(respuesta.toLowerCase() !== respuestas[num].toLowerCase()){
            errores[num]= respuestas[num]
        }
        guardarRespuesta('')
        cambiarnum(num+1)
    }

    return (  

        <>  
            <div className="border rounded mt-5 text-center">
                <h1 className="text-center text-gray-700 text-3xl font-bold">
                    Cultura general
                </h1>
                <div className="flex my-2 justify-center px-6">
                    <Line className="w-11/12" percent={num*25} strokeWidth="4" strokeColor='#3FC7FA' />
                    <h2 className="w-1/12 ml-3">{num*25}%</h2>
                </div>
                {num !== 4 ?
                    <>
                        <div className="flex justify-between px-6 my-2 text-gray-700 text-2xl font-bold">
                            <p>Pregunta {num+1}</p>
                            <p>{num+1}/4</p>
                        </div>
                        <p className=" text-gray-700 text-1xl font-bold ">
                            {preguntas[num]}
                        </p> 
                        <form className="flex justify-around my-2" onSubmit={handleSubmit}>
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
                        </form>
                        {alerta && <p className="bg-red-400 font-bold text-center  text-white  p-2 my-2 mx-4">¡Error! Responda la pregunta</p>}
                    </>
                :
                    <>  
                        {errores.every(e => e === "") ? 
                            <div className="text-center text-gray-700 font-bold my-3">
                                <h2 className="text-2xl">¡Felicidades!</h2>
                                <p>Respondiste correctamente todas las preguntas</p>
                            </div> 
                        :
                            <>
                                <h2 className="text-center text-gray-700 text-2xl font-bold my-3">
                                    Revisa las respuestas incorrectas
                                </h2>
                                {errores.map((error, i) => (
                                    <Error
                                        preguntas={preguntas[i]}
                                        key={i}
                                        error={error}
                                    />
                                ))}
                            </>
                        }
                        <button
                            type="sumbit"
                            onClick={() => cambiarnum(0) }
                            className="w-2/5 bg-green-600 mb-2 p-2 text-white rounded hover:bg-green-800"
                        >
                            Reiniciar Quiz
                        </button>
                    </>
                }
            </div>
        </>

    );

}
 
export default Quiz;