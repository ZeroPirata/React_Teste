/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import Icon from '../../../img/logo.png'


class NavBarFora extends Component {
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
    const ImgConfig = {
      paddingRight: 10,
      paddingTop: "25px"
    }
    return (
      <>
        <nav style={NavBarControll}>
          <div className="nav-wrapper">
            <a href="#" style={ionicHealmets} className="brand-logo">Ionic <span style={ionicHealmtsBolding}>Healmets</span> </a>

            <ul className="right">
              <li><img style={ImgConfig} height={60} width={65} src={Icon} /></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBarFora;
