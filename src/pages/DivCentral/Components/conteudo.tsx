import { Component } from "react"
type ConteudoProps = {
    tema: string,
    instrutor: string,
    assunto: string,
    icon?: string
    funcaoIcon?: string
}
function Conteudo({
    tema,
    instrutor,
    assunto,
    icon,
    funcaoIcon
}: ConteudoProps) {
    const DivControll = {
        border: "3px solid #3d3f3f94",
        height: "175px",
        width: "80%",
        margin: "auto",
        marginBottom: "15px"
    }
    const SpanControl = {
        display: "block",
        width: "1000px",
        paddingLeft: "25px"
    }
    const IconControl = {
        width: "250px",
        height: "175px",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#1AAE9F",
    }
    const tagDiv = {
        fontSize: "2em",
        fontWeight: "bold",
        color: "#D3455B",
    }
    const tagVideo = {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#1AAE9F",
    }
    const tagInstrutor = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#3d3f3f94",
    }
    return (
        <>
            <div style={DivControll}>
                <div>
                    <span className="right" style={IconControl}><i className="large material-icons">{icon}</i>{funcaoIcon}</span>
                </div>
                <span style={Object.assign({}, SpanControl, tagDiv)}>{tema}
                </span>
                <span style={Object.assign({}, SpanControl, tagVideo)}>{assunto}</span>
                <span style={Object.assign({}, SpanControl, tagInstrutor)}>{instrutor}</span>
            </div>
            
        </>
    )
}
export default Conteudo