import {useEffect, useState} from "react";


const Loader = () => {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2500);
    // }, []);

    const elements = loading && <div id="preloader" className="preloader">
        <div className="preloader-box">
            <img src="src/assets/images/preloader.svg" alt="preloader"/>
        </div>
    </div>

    return (
        <>
            {elements}
        </>
    )
}

export default Loader;