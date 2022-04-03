/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import BTN from "./Login/login"

function Registro() {
    const gridFullSizes = {
        height: "100vh"
    }
    const gridFullSize = {
        height: "90vh"
    }
    const background = {
        backgroundColor: "#F4F4F5",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    }
    const h2Config = {
        color: "#1AAE9F",
        fontSize: "3em",
    }
    const checkbox = {
        marginTop: "0.5em",
        marginLeft: "4em",
        fontSize: "2em"
    }
    const teste = {
        marginLeft: "10em",
        marginTop: "0.39em"
    }
    return (
        <div className="row">
            <div style={gridFullSizes} className="col s2 blue-grey lighten-3"></div>
            <div style={Object.assign({}, background, gridFullSize)} className="col s8">
                <div className="row" >
                    <div className="col s6"  >
                        <span style={h2Config}>Cadastre-se</span>
                        <BTN value="Gabriel Souza Bicho Nunes" texto="Nome Completo" width={"500px"} type={"text"}></BTN>
                        <BTN value="Sua melhor senha" texto="Senha" width={"500px"} type={"password"}></BTN>
                        <BTN value="XXX.XXX.XXX-XX" texto="CPF" width={"500px"} type={"text"}></BTN>
                    </div>
                    <div className="col s6" >
                        <span style={h2Config}>não fique de fora!</span>
                        <BTN value="Gabriel0gsbn@exemplo.com" texto="Email" width={"500px"} type={"text"}></BTN>
                        <BTN value="Repita sua melhor senha" texto="Senha" width={"500px"} type={"password"}></BTN>
                        <label>
                            <input type="checkbox" />
                            <span style={checkbox}>Concordo com os termos</span>
                        </label>
                        <div className="row" style={teste}>
                            <div className="col s12">
                                <Link to="/" className="waves-effect waves-light btn-large"><i className="material-icons right">check_circle
                                </i>Cadastrar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={gridFullSizes} className="col s2 blue-grey lighten-3"></div>
        </div>
    )
}
export default Registro