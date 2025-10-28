import style from './about.module.css'
function About() {
    return (
        <>
            <section className={style.about}>
            <div className="container">
                <h2 className={`text-white ${style.text2}`}>ABOUT</h2>
                <div className="start d-flex justify-content-center align-items-center gap-2">
                    <div className={`${style.line}`}></div>
                    <svg className={style.star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12  1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <div className={`${style.line}`}></div>
                </div>
                <div className={`${style.para} d-flex justify-content-center gap-5`}>
                <div className='col-lg-4'>
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap.The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                </div>
                <div className='col-lg-4'>
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
                </div>
                <div className="btn1 d-flex justify-content-center">
                    <a href="!#" className='btn btn-outline-light p-3'> <svg className="svg-inline--fa fa-download me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                    <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg>
                    Free Download</a>
                </div>
            </div>
            </section>
        </>
    );
}

export default About