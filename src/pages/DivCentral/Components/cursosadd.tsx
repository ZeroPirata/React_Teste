import { Component } from "react";

type cursoDetail = {
    curso: string
    width: string
}

function NewCurso({
    curso,
    width
}: cursoDetail) {
    const config ={
        width: width
    }
    const cursos_nome = {
        fontSize: "1.25em",
        fontWeight: "Bold",
    }
    return (
        <>
            <span style={cursos_nome}>{curso}</span>
            <div className="progress">
                <div style={config} className="determinate"></div>
            </div>
        </>
    )
}
export default NewCurso