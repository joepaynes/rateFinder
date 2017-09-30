import axios from 'axios';
import _ from 'lodash';


const API_KEY = "api_key=c589a070-86b8-0135-fb5a-005056920ffa"
const ROOT_URL = "https://api.nzpost.co.nz/ratefinder/rate.json"

export const NZPOSTdom = 'nzpost_dom';

export function Rate_NZPOSTdom(data, callback) {
    
    const request = axios({
        method: 'GET',
        url: `${ROOT_URL}?${API_KEY}`,
        withCredentials: false,
        params: {
            thickness: data.thickness,
            length: data.length,
            weigth: data.weight,
            height: data.height,
            format: 'json',
        }
    });

    // .then(() => callback());

    return(dispatch) => {
        request.then(({data}) => {
            dispatch({type: NZPOSTdom, payload: data})
        });
    };
}

