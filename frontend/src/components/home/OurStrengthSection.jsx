


const OurStrengthSection = () => {

    return (
        <section className="our-strength position-r pt-150 pb-120 mb-150 bg-yellow overflow-h">
            <div className="strength-vacter wow fadeInRight animation-delay-5">
                <img src="src/assets/images/strength-vacter.png" alt="Vacter Image"/>
            </div>
            <div className="container">
                <div className="section-heading wow fadeInUp">
                    <h5 className="sub-title">Our Strength</h5>
                    <h2>Why We Are The Best?</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                        <div className="strength-icon">
                            <img src="src/assets/images/all-kinds-of-foods.png" alt="All kinds of Foods"/>
                        </div>
                        <div className="strength-content">
                            <h4 className="strength-title">All kinds of Foods</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                        <div className="strength-icon">
                            <img src="src/assets/images/fresh-foods.png" alt="Fresh Foods"/>
                        </div>
                        <div className="strength-content">
                            <h4 className="strength-title">Fresh Foods</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                        <div className="strength-icon">
                            <img src="src/assets/images/best-taste.png" alt="Best Taste"/>
                        </div>
                        <div className="strength-content">
                            <h4 className="strength-title">Best Taste</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                        <div className="strength-icon">
                            <img src="src/assets/images/on-time-delivery.png" alt="On Time Delivery"/>
                        </div>
                        <div className="strength-content">
                            <h4 className="strength-title">On Time Delivery</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStrengthSection;