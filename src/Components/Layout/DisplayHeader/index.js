import { useState, createContext } from "react";
import { useNavigate } from 'react-router-dom';
const DisplayContext = createContext();

function DisplayProvider({ children }) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const setDataForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        if (formDataObj.email == "") {
            const formElement = e.target
            console.log(e.target);
            console.log(formElement.querySelector('#form-custom'));
            formElement.querySelector('#form-custom').classList.add("is-invalid")
        }
        else {
            setEmail(formDataObj.email)
            navigate('/detail');
        }

    };
    const item = {
        email,
        setDataForm

    };
    return (
        <DisplayContext.Provider value={item}>
            {children}
        </DisplayContext.Provider>
    );
}
export { DisplayProvider, DisplayContext };
