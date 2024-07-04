


const Contact = () => {

    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Contact Us</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="black-jamun wow fadeInLeft animation-delay-5">
                    <img src="src/assets/images/black-jamun.png" alt="black-jamun" />
                </div>

                <div className="onion-img wow fadeInUp animation-delay-6">
                    <img src="src/assets/images/onion.png" alt="onion" />
                </div>

                <div className="tamato-img wow fadeInUp animation-delay-7">
                    <img src="src/assets/images/tamato.png" alt="tamato" />
                </div>

                <div className="leaf-img wow fadeInRight animation-delay-8">
                    <img src="src/assets/images/banner-leaf.png" alt="banner-leaf" />
                </div>
            </section>


            <section className="reservation-main ptb-150 position-r overflow-h">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 d-flex">
                            <div className="section-heading section-heading-left wow fadeInLeft">
                                <h5 className="sub-title">Consultation</h5>
                                <h2>Send Us Message</h2>
                            </div>
                            <div className="contactfrmmsg">Thank You! Your message has been sent.</div>
                            <form className="book-form wow fadeInLeft md-mb-40 contactfrm" method="post">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="text" className="form-control" placeholder="Name*" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="text" className="form-control" placeholder="Email*" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="text" className="form-control" placeholder="Phone*" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="text" className="form-control" placeholder="Website" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Write Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-button">
                                        <button className="btn-ct">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 d-flex">
                            <div className="full-img wow fadeInRight">
                                <img src="src/assets/images/cons-img.jpg" alt="cons-img" className="radius-40" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="overflow-h">
                <div className="contact-map-box wow fadeInUp">
                    <iframe className="map-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d144.95343106869794!3d-37.81739907631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sin!4v1562916623921!5m2!1sen!2sin" style={{border:'0', width:'100%'}} allowFullScreen=""></iframe>
                </div>
            </div>


            <section className="contact-info pt-150 pb-100 overflow-h">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact-info-box wow fadeInUp">
                                <div className="contact-img">
                                    <img src="src/assets/images/location.png" alt="location" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="mb-15">Location</h4>
                                    <ul>
                                        <li>155 Main Street, 2nd Floor New York City</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact-info-box wow fadeInUp">
                                <div className="contact-img">
                                    <img src="src/assets/images/mail.png" alt="mail" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="mb-15">Email Address</h4>
                                    <ul>
                                        <li><a href="mailto:Support@gmail.com">Support@gmail.com</a></li>
                                        <li><a href="mailto:Contact@gmail.com">Contact@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact-info-box wow fadeInUp">
                                <div className="contact-img">
                                    <img src="src/assets/images/call.png" alt="call" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="mb-15">Contact Us</h4>
                                    <ul>
                                        <li><a href="tel:+49123456789">+ 49 123 456 789</a></li>
                                        <li><a href="tel:+49123456789">+ 49 123 456 789</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Contact