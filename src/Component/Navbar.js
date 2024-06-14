import React,{useState} from "react";

export default function Navbar( ){
    const [myStyle,setMyStyle]=useState({
        color:'white',
        backgroundColor:"black"
      })

      const togglebtn=()=>{
        if(myStyle.color === 'white'){
          setMyStyle({
            color:'black',
            backgroundColor:'white'
          })
        }
        else{
          setMyStyle({
            color:'white',
            backgroundColor:'black'
          })
        }
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
                <div className="container-fluid" style={myStyle}>
                    <a className="navbar-brand" href="/" style={myStyle}>
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyle} >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active"style={myStyle} aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={myStyle} href="/">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"style={myStyle} href="/">
                                    Content
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglebtn} />
                        <label className="form-check-label" for="flexSwitchCheckDefault"> Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    );
}
