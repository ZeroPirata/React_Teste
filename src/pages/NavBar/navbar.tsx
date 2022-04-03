/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import Icon from '../../img/logo.png'


class NavBarDentro extends Component {
  render() {

    const ionicHealmets = {
      paddingLeft: 10,
      fontWeight: 500,
      color: "#4D4E4F",
      fontSize: 60,
      marginTop: "15px"
    }
    const ionicHealmtsBolding = {
      fontWeight: "bold",
      color: "#1AAE9F",
      fontStyle: "italic"
    }
    const NavBarControll = {
      backgroundColor: "#F4F4F5",
      height: 90
    }
    const BtnConfig = {
      backgroundColor: "#F4F4F5",
      color: "#1AAE9F",
      border: '1px solid #1AAE9F',
      fontWeight: "bold",
      height: "2.5rem",
      fontSize: "1.5rem",
      marginTop: "15px"
    }
    const ImgConfig = {
      paddingRight: 10,
      paddingTop:"25px"
    }
    return (
      <>
        <nav style={NavBarControll}>
          <div className="nav-wrapper">
            <a href="#" style={ionicHealmets} className="brand-logo">Ionic <span style={ionicHealmtsBolding}>Healmets</span> </a>

            <ul className="right">
              <li><a href="sass.html" style={BtnConfig} className="waves-effect waves-light btn">Buscar Curso<i style={{ fontSize: "2rem" }} className="material-icons left">search</i></a></li>
              <li><a href="sass.html" style={BtnConfig} className="waves-effect waves-light btn">Area de Curso</a></li>
              <li><a href="sass.html" style={BtnConfig} className="waves-effect waves-light btn">Fórum</a></li>
              <li><img style={ImgConfig} height={60} width={65} src={Icon} /></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBarDentro;
