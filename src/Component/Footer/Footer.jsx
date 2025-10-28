import style from './footer.module.css'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import linkedin from '../../assets/images/linkedin.svg'
import ball from '../../assets/images/ball.svg'
function Footer() {
    return (
        <>
        <div className={style.footer}>
            <div className="container">
                <div className="row text-white">
                    <div className="col-lg-4  ">
                        <h4 className={`${style.h4} text-center`}>Location</h4>
                        <p  className="text-center">2215 John Daniel Drive <br/>Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 ">
                        <h4 className={`${style.h4} text-center`}>Around the Web</h4>
                        <div className="social d-flex gap-2 justify-content-center">
                            <a className={`btn btn-outline-light ${style.btnSocial}`} href="#!">
                            <img src={facebook} alt="facebook" />
                            </a>
                            <a className={`btn btn-outline-light ${style.btnSocial}`} href="#!">
                            <img src={twitter} alt="twitter" />
                            </a>
                            <a className={`btn btn-outline-light ${style.btnSocial}`} href="#!">
                            <img src={linkedin} alt="linkedin" />
                            </a>
                            <a className={`btn btn-outline-light ${style.btnSocial}`} href="#!">
                            <img src={ball} alt="ball" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <h4 className={`${style.h4} text-center`}>About Freelancer</h4>
                        <p className="text-center">Freelance is a free to use, open source Bootstrap theme created by <a href="!#" className={`${style.link}`}>Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>  
        </div>
        <div className={style.minFooter}>
            <p className="text-white text-center">Copyright © Your Website 2021</p>
        </div>
        </>
    );
}

export default Footer