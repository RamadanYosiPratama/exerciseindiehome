import React, {Component} from 'react';



class Indiehome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promo: "promo",
            paket: "paket & Add ON",
            bantuan: "Pusat Bantuan",
            info: "info Terkini"
        };
    }
    render() {
        return(
            <div className="header">
            <div className="container warna">
                <nav className="navbar navbar-expand-lg navbar-light warna">
                    <a className="navbar-brand" to=""> <img className="logo" src={require('../logo/logo1.png')} alt="logo"/></a>
                    <button className="navbar-toggler toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ml-auto">   
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false">
                                        Promo
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" to="">Promo</a>
                                    <a className="dropdown-item" to="">Partnership</a>
                                    </div>   
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false">
                                    paket & Add-On
                                    </a>
                                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" to="">Action</a>
                                    <a className="dropdown-item" to="">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    
                                    </div>
                                </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-white">Pusat Bantuan</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false">
                                    info terkini
                                    </a>
                                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" to="">Action</a>
                                    <a className="dropdown-item" to="">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    
                                    </div>
                                </li>
                                    
                        </ul>
                    </div>           
                </nav>
            </div>
            </div>
        );
    }

}
export default Indiehome;