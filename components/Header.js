import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ContainerStyled = styled.nav`
    background-color:#144699;
    padding-bottom:1rem;

    @media screen and (max-width: 480px){
        position: unset !important;
        left: 0;
        right: 0;
        z-index: 0; !important;
    }
    
    .logo {
        color:#FFFFFF; 
        font-size:30px;
        font-weight:800;  
    }

    .Nav{
        margin-left:1rem;  
        background: transparent;
    }

    .Nav:hover{
        color:white;
        background:transparent;
    }

    .nav-a{
    color:#FFFFFF; 
    font-size:20px;
    font-weight:600;
    }

    .nav-a:hover
    {
        color:#FFFFFF; 
        background: transparent;
    }

    .add{
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
        margin-top:0.5rem;
        background-color:rgba(0, 0, 0, 0)
    }

    .add a{
        font-weight:600;
        font-size:18px;
        color:#144699;
    }
    
    .buttons{
        margin-top: 0.5rem;
    }

    
    .button{
        
        background-color:#00285C;
        margin-left:1rem;
        color:#FFFFFF; 
        font-size:24px;
        border:2px solid #00285C;
        transition:font-size 0.2s;
    }

    .button:hover{
        background-color:#00285C;
        font-size:23.5px;
    }

    .mobile{
        color:#ffff;
    }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  MobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive
    });
  }
  render() {
    const { isActive } = this.state;
    return (
      <ContainerStyled
        className={isActive ? "navbar" : "navbar is-fixed-top"}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container is-medium ">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <h1 className="logo">BLOCKCHAIN</h1>
              </a>
            </Link>

            <a
              role="button"
              className={
                isActive
                  ? "navbar-burger burger mobile is-active"
                  : "navbar-burger burger mobile"
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => this.MobileMenu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className={isActive ? "navbar-menu is-active" : "navbar-menu"}
          >
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable Nav">
                <a className="navbar-item nav-a">Product</a>
                <div className="navbar-dropdown">
                  <div className="navbar-item add">
                    <a>wallet</a>
                    <p>Send,receive and Trade</p>
                  </div>
                  <div className="navbar-item add">
                    <a>Blochan Markets</a>
                    <p>Institutional Portal</p>
                  </div>
                  <div className="navbar-item add">
                    <a>LockBox</a>
                    <p>Hardware Wallet</p>
                  </div>

                  <div className="navbar-item add">
                    <a>Developers</a>
                    <p>Access our API</p>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable Nav">
                <a className="navbar-item nav-a">Data</a>
                <div className="navbar-dropdown">
                  <div className="navbar-item add">
                    <a>Prices</a>
                    <p>Quotes, News, and More</p>
                  </div>
                  <div className="navbar-item add">
                    <a>Charts</a>
                    <p>Stats, and Network Activity</p>
                  </div>
                  <div className="navbar-item add">
                    <a>Bitcoin Explorer</a>
                    <p>Search BTC Blockchain</p>
                  </div>
                  <div className="navbar-item add">
                    <a>Ethereum Explorer</a>
                    <p>Search ETH Blockchain</p>
                  </div>
                  <div className="navbar-item add">
                    <a>Bitcoin Cash Explorer</a>
                    <p>Search BCH Blockchain</p>
                  </div>
                </div>
              </div>
              <a className="navbar-item Nav nav-a">
                <i class="fas fa-search" />
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <Link href="/login">
                      <strong>Log in </strong>
                    </Link>
                  </a>
                  <a className="button is-primary">
                    <Link href="/signup">
                      <strong>Sign up </strong>
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerStyled>
    );
  }
}
