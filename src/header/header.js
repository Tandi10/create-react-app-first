import React, {Component} from 'react';
import './header.css';
import logo from './wwf-logo.png';
class Header extends Component {
    render() {
        return (
            <div className="Header">
              <div className="Header1">
                <div className="Header-logo">
                    <img src={logo} className="Logo" alt="logo"/>
                </div>
                <div className="Btn-menu">
                    <button className="Btn">Retour à la frise</button>
                    <button className="Btn">Faire un don
                    </button>
                    </div>

                 <div className="Header-video">

                    <video src="http://40.wwf.fr/medias/videos/mp4/baleine.mp4" autoPlay />
                </div>
                  </div>
            </div>
            <div className="Article">
              <div className="ArticleChapeau"></div>
            </div>

        );
    }
}

export default Header;
