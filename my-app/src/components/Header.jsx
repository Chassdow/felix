import React from "react";
import '../../src/App.css'
import logo from '../img/logoweb.png';
import photo from '../img/profil.jpg'

function Header({ Header }) {
    // console.log(json.p)
    return (
        <>
            <div className="containerHeader">
                <div id="moi" className="projettextHeader">
                    <p>{Header.prenom}</p>
                    <p>{Header.poste}</p>  
                    {/* <div className="headertest"> */}
                    <img className="logo" src= {logo} alt="logo"/>
                    </div>
                </div>
            {/* </div> */}
        </>

    )
}

export default Header;