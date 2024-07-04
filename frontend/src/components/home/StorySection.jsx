


const StorySection = () => {


    return (
        <section className="our-story right-padding position-r mb-150 overflow-h">
            <div className="black-jamun wow fadeInLeft animation-delay-5">
                <img src="src/assets/images/black-jamun.png" alt="Vacter Image"/>
            </div>
            <div className="story-onion wow fadeInUp">
                <img src="src/assets/images/onion.png" alt="Vacter Image"/>
            </div>
            <div className="our-story-inner">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-12 wow fadeInLeft order-md_2">
                        <div className="story-img text-center">
                            <img src="src/assets/images/our-story.png" alt="Our Story"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 wow fadeInRight order-md_1">
                        <div className="section-heading section-heading-right">
                            <h5 className="sub-title">Our Story</h5>
                            <h2>The Pizzon Has Excellent Of Quality Foods</h2>
                        </div>
                        <div className="story-content md-mb-40">
                            <div className="our-story-desc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.</p>
                            </div>
                            <a href="about.html" className="btn-ct right-arrow">Read More <img
                                src="src/assets/images/right.png" alt="right icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection;