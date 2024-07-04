

const Error = () => {

    return(
        <main className="main">
            <section className="error-part ptb-100">
                <div className="container">
                    <div className="error-box">
                        <div className="error-img position-r wow fadeInUp">
                            <img src="src/assets/images/error-img.png" alt="error-img" />
                                <div className="error-top">
                                    <img src="src/assets/images/error-top.png" alt="error-top" />
                                </div>
                        </div>
                        <div className="error-content text-center wow fadeInUp">
                            <h1 className="error-title">Page Not Found</h1>
                            <p>Bad request, The page you are looking for on longer exists.</p>
                            <a href="index.html" className="btn-ct">Back To Homepage</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Error