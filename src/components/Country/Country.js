import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';


const Country = ({ selectedItem }) => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {

        const dataCountries = async () => {
            setCountries(await fetchCountries());
        }
        dataCountries();

    }, [setCountries])



    return (
        <div>

            <select onClick={(e) => selectedItem(e.target.value)} name="" id=""
                className=" form-control form-control-sm w-75 mx-auto my-1">
                <option value=''>Global</option>
                {countries.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>


        </div>
    );
}

export default Country;