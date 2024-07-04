
const BookNow = () => {
    
    return (
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Book A Table</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Book A Table</li>
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

            <section className="reserve-seat overflow-h ptb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 d-flex">
                            <div className="section-heading p-0 max-width-660 wow fadeInLeft">
                                <h5 className="sub-title">Reserve Your Seat</h5>
                                <h2 className="mb-20">Call Us Or Visit Place</h2>
                                <p>Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.</p>
                            </div>

                            <div className="our-places md-mb-40 wow fadeInUp animation-delay-5">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="our-places-content pt-50">
                                            <h4 className="mb-15">Torre Annunziata</h4>
                                            <p>1614 E. Bell Rd #104.<br/>Salerno, AZ 85022<br/>(989) 867-1010<br/>Open today 11AM-10PM0</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="our-places-content pt-50">
                                            <h4 className="mb-15">Posillipo</h4>
                                            <p>204 E. Pizzetta Tommaso<br/>Sorrento, AZ 85022<br/>(989) 867-1010<br/>Open today 11AM-10PM0</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="our-places-content pt-50">
                                            <h4 className="mb-15">Torre del Greco</h4>
                                            <p>Vale Puglia 54<br/>Torre Del Greco AZ 85022<br/>(989) 867-1010<br/>Open today 11AM-10PM0</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="our-places-content pt-50">
                                            <h4 className="mb-15">Naples Mercato</h4>
                                            <p>Corso Itali AA<br/>Naples, AZ 85022<br/>(989) 867-1010<br/>Open today 11AM-10PM0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 d-flex">
                            <div className="reserve-img full-img wow fadeInRight">
                                <img src="src/assets/images/reserve-img.jpg" alt="reserve-img" className="radius-40" />
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


            <section className="reservation-main ptb-150 position-r overflow-h">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 order-md_2 d-flex">
                            <div className="full-img wow fadeInLeft">
                                <img src="src/assets/images/book-img.jpg" alt="book-img" className="radius-40" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 order-md_1 d-flex">
                            <div className="section-heading section-heading-left wow fadeInRight">
                                <h5 className="sub-title">Reservation</h5>
                                <h2>Book A Table Now!</h2>
                            </div>
                            <form className="book-form wow fadeInRight md-mb-40">
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
                                            <input type="text" name="text" className="form-control" placeholder="Time*" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="text" className="form-control" placeholder="Date*" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="text" className="form-control" placeholder="Guest*" required />
                                        </div>
                                    </div>
                                    <div className="form-button">
                                        <button className="btn-ct">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default BookNow