import style from './portfolio.module.css'
import cabin from './../../assets/images/cabin.webp'
import cake from './../../assets/images/cake.webp'
import circus from './../../assets/images/circus.webp'
import game from './../../assets/images/game.webp'
import safe from './../../assets/images/safe.webp'
import submarine from './../../assets/images/submarine.webp'
function Portfolio() {
    return (
    <>
        <section className={style.portfolio}>
            <div className="container">
                    <h2 className={style.text2}>PORTFOLIO</h2>
                    <div className="start d-flex justify-content-center align-items-center gap-2">
                        <div className={`${style.line}`}></div>
                        <svg className={style.star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#2C3E50" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12  1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <div className={`${style.line}`}></div>
                    </div>
                <div className="product g-2 pt-5">
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="image">
                                <img src={cabin} alt="cabin" className={style.imgPortfolio} />
                            </div>
                            </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="image">
                                <img src={cake} alt="cake" className={style.imgPortfolio} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="image">
                                <img src={circus} alt="circus" className={style.imgPortfolio} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="image">
                                <img src={game} alt="game" className={style.imgPortfolio} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="image">
                        <img src={safe} alt="safe" className={style.imgPortfolio} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="image">
                                <img src={submarine} alt="submarine" className={style.imgPortfolio} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default Portfolio