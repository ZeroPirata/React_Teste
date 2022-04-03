/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { render } from "@testing-library/react"
import { Component } from "react"
import Conteudo from "./Components/conteudo"
import ZERO from '../../img/zero.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NewCurso from "./Components/cursosadd"
import { Link } from "react-router-dom"

class DivContainer extends Component {
    render() {
        const DivsControll = {
            height: "100vh"
        }
        const SubDivControll1 = {
            paddingTop: "20px",
            borderRight: "5px dashed #3d3f3f94",
            height: "100vh"
        }
        const SubDivControll2 = {
            borderLeft: "3px solid $3d3f3f94",
            height: "100%",
            justifyContent: "center",
            alignItems: 'center',
            textAlign: 'center' as 'center',
        }
        const imageControll = {
            marginTop: "1.5em",
            marginBottom: "1.5em",
            height: "200px",
            width: "300px",
            borderBottom: "3px solid #3d3f3f94 ",
        }
        const nome = {
            fontSize: "1.5em",
            fontWeight: "Bold",
            paddingTop: "13px",
            borderTop: "3px solid #3d3f3f94 "
        }
        const cursos = {
            fontSize: "1.5em",
            fontWeight: "Bold",
            paddingTop: "5px",
            marginBottom:"2px solid #3d3f3f94",
            borderTop: "3px solid #3d3f3f94 "
        }

        const BTNconfg = {
            backgroundColor: "white",
            color: "orange",
            marginBottom: "1em",
            fontWeight: "bold",
            fontSize: "1.5em",
            height: "45px",
            borderRadius: "25px",
            border: "3px solid orange"
        }
        const BTNconfgSair = {
            backgroundColor:"white",
            color:"#1aae9fd3",
            fontWeight:"Bold",
            fontSize:"1.25em",
            height:"2.5em",
            paddingTop:"0.2em",
            marginTop:"1.25em",
            border:"3px solid #1aae9f89"
        }
        return (
            <div className="row" style={DivsControll}>
                <div className="col s10" style={SubDivControll1}>
                    <Conteudo tema="Novo Curso" instrutor="Vladimir" assunto="Curso de engenharia de Software II" icon="launch" funcaoIcon="Ver Mais" />
                    <Conteudo tema="Continue assistindo" instrutor="Viktor" assunto="Curso de C# para iniciantes" icon="forward" funcaoIcon="Acessar Curso" />
                    <Conteudo tema="Continue assistindo" instrutor="Zeropirata" assunto="React - Como integrar com BackEnd" icon="forward" funcaoIcon="Acessar Curso" />
                    <Conteudo tema="POST da comunidade" instrutor="User: Vinicius" assunto="Como que instalo REACT na minha maquina ?" icon="chat" funcaoIcon="Ir para o Tópico" />
                </div>
                <div className="col s2" style={SubDivControll2}>
                    <img style={imageControll} className="circle responsive-img" src={ZERO} />
                    <span style={nome}>Gabriel Souza Bicho Nune</span>
                    <a style={BTNconfg} className="waves-effect waves-light btn">Ausente</a><br />
                    <span style={cursos}>Curso em andamento</span>
                    <div>
                        <NewCurso curso="Python" width="50%"/>
                        <NewCurso curso="Curso de C# para iniciante" width="10%"/>
                        <NewCurso curso="React" width="75%"/>
                        <NewCurso curso="PHP" width="1%"/>
                        <NewCurso curso="MySQL" width="35%"/>
                        <NewCurso curso="JavaScript" width="25%"/>
                    </div>
                    <Link to="/" style={BTNconfgSair} className="waves-effect waves-light btn">Sair</Link><br />
                </div>
            </div>
        )
    }
}
export default DivContainer;