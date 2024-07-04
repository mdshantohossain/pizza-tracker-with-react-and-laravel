




const Reservation = () => {


    return (
        <section className="reservation-part left-padding mb-150 position-r overflow-h">
            <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-12">
                    <div className="section-heading section-heading-left wow fadeInLeft">
                        <h5 className="sub-title">Reservation</h5>
                        <h2>Book A Table Now!</h2>
                    </div>
                    <form className="book-form md-mb-40 wow fadeInLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Name*"
                                           required/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Email*"
                                           required/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Phone*"
                                           required/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Time*"
                                           required/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Date*"
                                           required/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Guest*"
                                           required/>
                                </div>
                            </div>
                            <div className="form-button">
                                <button className="btn-ct">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 text-center">
                    <div className="reservation-pizza position-r wow fadeInRight">
                        <div className="book-leaf book-leaf-1">
                            <img src="src/assets/images/leaf-1.png" alt="Leaf"/>
                        </div>
                        <div className="book-leaf book-leaf-2">
                            <img src="src/assets/images/leaf-2.png" alt="Leaf"/>
                        </div>
                        <div className="book-leaf book-leaf-3">
                            <img src="src/assets/images/leaf-3.png" alt="Leaf"/>
                        </div>
                        <img src="src/assets/images/reservation-pizza.png" className="position-r" alt="Pizza"/>
                    </div>
                </div>
            </div>
            <div className="book-jamun wow fadeInRight animation-delay-5">
                <img src="src/assets/images/book-jamun.png" alt="Jamun"/>
            </div>
            <div className="book-leaf-big wow fadeInRight animation-delay-5">
                <img src="src/assets/images/book-leaf.png" alt="Leaf"/>
            </div>
        </section>
    )
}


export default Reservation;