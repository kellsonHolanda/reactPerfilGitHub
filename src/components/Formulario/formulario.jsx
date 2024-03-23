import { useEffect, useState } from "react"

const Formulario = () => {

    const [materiaA, setValorA] = useState (0);
    const [materiaB, setValorB] = useState (0);
    const [materiaC, setValorC] = useState (0);

    useEffect (() => {
        console.log("A matéria A mudou para " + materiaA)
    }, [materiaA]);

    const resultado = () => {

        const soma = materiaA + materiaB + materiaC;
        const media = soma/3;
        if (media >= 7){
            return(
                <p>Você foi aprovado!</p>
        )} else{
            return(
                <p>Você não foi aprovado!</p>
            )
        }        
    }
    return (
    <form>
        {[1, 2, 3].map(item => (
            <li key={item}>{item}</li>
        ))}
        <input type="number" placeholder="Nota matéria A" onChange={evento => setValorA(parseInt(evento.target.value))}/>
        <input type="number" placeholder="Nota matéria B" onChange={evento => setValorB(parseInt(evento.target.value))} />
        <input type="number" placeholder="Nota matéria C" onChange={evento => setValorC(parseInt(evento.target.value))}/>
        <p>{resultado()}</p>
    </form>
    
    )
}

export default Formulario 