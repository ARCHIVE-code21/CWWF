import * as React from "react" 

export const createProduct = (title, videoUrl) => {
    return async (dispatch) => {

    const response = await fetch('cctv.json', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        title,
        videoUrl,
        }).then((response) => {})
    });

    const resData = await response.json();

    dispatch({
        type: CREATE_PRODUCT,
        productData: {
            id: resData.name,
            title,
            videoUrl,
        }
    });
    };
};

export function postData(url = '', data = FormData) { 
    return fetch(url, 
        { 
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: { 
                    'Content-Type': 'application/json', 
                }, 
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: data, 
        }) 
        
        .then(response => response.json()); }

