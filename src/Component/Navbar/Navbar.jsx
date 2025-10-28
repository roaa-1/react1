import style from './navbar.module.css';
function Navbar() {
    
return (
<>
<nav className={`navbar navbar-expand-lg nav-bar ${style.navbar}`}>
    <div className="container d-flex justify-content-between align-items-center">
    <a className={`navbar-brand text-white ${style.logo}`} href="#">Start Bootstrap</a>

    <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav mb-2 mb-lg-0 fw-bold">
        <li className="nav-item">
        <a className={`nav-link text-white ${style.navLink}`} href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link text-white ${style.navLink}`} href="#">ABOUT</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link text-white ${style.navLink}`} href="#">CONTACT</a>
        </li>
    </ul>
    </div>
</div>
</nav>

</>
);
        
}
    export default Navbar