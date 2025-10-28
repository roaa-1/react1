import style from './contact.module.css'
function Contact() {
    return (
<>
    <div className={style.contact}>
            <h2 className={style.text2}>CONTACT ME</h2>
            <div className="start d-flex justify-content-center align-items-center gap-2">
                <div className={`${style.line}`}></div>
                <svg className={style.star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#2C3E50" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12  1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <div className={`${style.line}`}></div>
            </div>
        <form className="w-50 m-auto mt-5 ">
            <div className="formDesign d-flex flex-column gap-4">
            <div className="form-floating mb-3 ">
                <input type="text" className={`form-control ${style.formControl} ${style.input}`} id="siteName"  placeholder="Full name" />
                <label htmlFor="siteName">Full Name</label>
                <p className="text-danger"></p>
            </div>
            <div className="form-floating">
                <input type="email" className={`form-control ${style.formControl} ${style.input}`} id="siteEmail" placeholder="Email address"/>
                <label htmlFor="siteEmail">Email Address</label>
                <p className="text-danger"></p>
            </div>
            <div class="form-floating mb-3">
                <input type="text" className={`form-control ${style.formControl} ${style.input}`} id="siteNumber" placeholder="Phone number"/>
                <label htmlFor="siteNumber">Phone number</label>
                <p className="text-danger"></p>
            </div>
            <div class="form-floating">
                <input type="password" className={`form-control ${style.formControl} ${style.input}`} id="siteMessage" placeholder="Message"/>
                <label htmlFor="sitPassword">Message</label>
                <p className="text-danger"></p>
            </div>
            <div class="buttons">
                <button type="submit" className={`btn  mt-3 btn-add ${style.btn1}`}>Send</button>
            </div>
            </div>
        </form>
    </div>
</>
);
}

export default Contact