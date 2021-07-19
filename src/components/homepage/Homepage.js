import React, { useState, useCallback } from 'react';
import { fetchRequest } from '../../utils-request/requests';
import ListAutoComplete from '../list-autocomplete/ListAutoComplete';
// var debounce = require('lodash.debounce');
import debounce from 'lodash/debounce';

export default function Homepage() {
    const [inputValue, setInputValue] = useState('');
    const [notficationMsg, setNotficationMsg] = useState('');
    const [list, setList] = useState([]);

    const putNotficationMsg = (arr) => {
        if (arr.length > 0) {
            setNotficationMsg('');
        } else {
            setNotficationMsg('No Items');
        }
    };

    const getAutoComplete = async (val) => {
       
        if (!val.length) {
            setList([]);
            putNotficationMsg([]);// if no item to show, show msg to the user
            return;
        }

        const results = await fetchRequest(`autocomplete/GetAutocomplete?name=${val}`);
        const tickerResults = results.filter(item => item.category.toLowerCase() === "ticker"); // only tickers

        const sortedTickersResults = tickerResults.sort((a, b) => {
            if (a.label.toLowerCase() > b.label.toLowerCase())
                return 1;
            if (a.label < b.label)
                return -1;
            return 0;
        });

        setList(sortedTickersResults.slice(0, 9));

        putNotficationMsg(sortedTickersResults); // if no item to show, show msg to the user
        return;
    };

    const deb = useCallback(debounce((val) => getAutoComplete(val), 1000), []);

    const changeHandler = (e) => {
        const val = e.target.value;
        setInputValue(val);
        deb(val);
    };

    return (
        <div className="homepage-wrapper">
            <input
                type="text"
                placeholder="Please type..."
                name="autocomplete"
                value={inputValue}
                onChange={(e) => changeHandler(e)}
            />

            <ListAutoComplete listToShow={list} />
            {notficationMsg}
        </div>
    );
}
