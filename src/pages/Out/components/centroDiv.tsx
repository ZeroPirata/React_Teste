/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import BTN from "./Login/login"

function DivLoginRegistro() {
    const gridFullSizes = {
        height:"100vh"
    }
    const gridFullSize = {
        height:"90vh"
    }
    const background = {
        backgroundColor: "#F4F4F5",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    }
    const loginDivClass = {
        height:"80%",
        width: "75%",
        flexDirection:"column" as "column",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        margin:"auto",
    }
    const h3Config = {
        fontWeight:"Bold",
        fontSize:"2em"
    }
    const h2Config = {
        fontWeight:"Bold",
        color:"#1AAE9F",
        fontSize:"3em"
    }
    const h4Config = {
        fontWeight:"Bold",
        color:"#1AAE9F",
        fontSize:"1.5em"
    }
    return (
        <div  className="row">
            <div style={gridFullSizes} className="col s2 blue-grey lighten-3"></div>
            <div style={Object.assign({}, background, gridFullSize)} className="col s8">
                <div style={loginDivClass}>
                <span style={h2Config}>Bem Vindo</span>
                <span style={h3Config}>Logue-se por favor</span>
                <BTN value="Gabriel0gsbn@exemplo.com" texto="Email" width={"500px"} type={"text"}></BTN>
                <BTN value="Sua melhor senha" texto="Senha" width={"500px"} type={"password"}></BTN>
                <Link to="/Zeropirata" className="waves-effect waves-light btn-large"><i className="material-icons right">cloud</i>Entrar</Link>
                <span style={h4Config}>Não tem uma conta? <Link to="/registrar">REGISTRE-SE AQUI!!!</Link></span>

                </div>
            </div>
            <div style={gridFullSizes} className="col s2 blue-grey lighten-3"></div>
        </div>
    )
}
export default DivLoginRegistro