import {createContext, useContext, useState} from "react";
import {PropTypes} from "prop-types";

const FoodContext = createContext([]);

export const useFoodContext = () => useContext(FoodContext);


const FoodProvider = ({children}) => {
    const [foods, setFoods] = useState([]);



    const values = {
        foods: foods,
        addFoods: (newFoods) => {
            setFoods((prevState) => [...prevState, newFoods]);
        }
    };

    return <FoodContext.Provider value={values}>
        {children}
    </FoodContext.Provider>
}

FoodProvider.propsType = {
    children: PropTypes.node.isRequired
}


export default FoodProvider;