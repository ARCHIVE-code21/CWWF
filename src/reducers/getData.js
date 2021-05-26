import * as React from "react" 

export function postData(url = '', data = FormData) {
        return fetch(url, 
            {   method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: { 'Content-Type': 'application/json', }, 
                redirect: 'follow', 
                referrer: 'no-referrer', 
                body: data, }) 
                .then(response => response.json()); }