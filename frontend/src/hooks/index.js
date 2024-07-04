import {Helmet} from "react-helmet";


export const truncateString = (str, num) => {

    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}


export const useHelmet = ({title}) => {
    return <Helmet>
        <title>{title}</title>
    </Helmet>
}


export const usePagePosition = ({value}) => {

    return window.scrollTo(value);
}