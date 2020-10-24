import React from 'react';
export default class FoaaProxy {

    

    GetMessage() {
        const resources = ['asshole',
        'awesome',
        'bag',
        'because',
        'bucket',
        'bye',
        'cool',
        'cup',
        'even',
        'everyone',
        'everything',
        'family',
        'fascinating',
        'flying',
        'ftfy',
        'fyyff',
        'give',
        'holygrail',
        'horse',
        'idea',
        'immensity',
        'jinglebells',
        'life',
        'logs',
        'looking',
        'maybe',
        'me',
        'mornin',
        'no',
        'nugget',
        'pink',
        'programmer',
        'question',
        'ratsarse',
        'retard',
        'ridiculous',
        'rtfm',
        'sake',
        'shit',
        'single',
        'thanks',
        'that',
        'this',
        'too',
        'tucker',
        'what',
        'zayn',
        'zero',
        ];

        let baseUrl = 'https://www.foaas.com';
        let resource = resources[this.getRndInteger(0, resources.length)];
        let from = 'anjasoft';

        let url = baseUrl + '/' + resource + '/' + from;
        
        return fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                return result.message

            });
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
}