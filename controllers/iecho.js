//IMPORTS
const { response , request } = require('express');

//request method
const getText = (req = request, res = response) => {
    /* Make the request, will return 200 code and the reverse word param, 
       aditionaly if the word is palimdrome send palindrome: true too.
       return status code 400 if there is no word in params */
    try {
        const text = req.query.text;
        const reverse = text.split('').reverse().join('');
        let response = {
            text: reverse
        }

        if(text === reverse){
            response.palindrome = true;
        }
        
        return res.status(200).json(response);

    } catch (error) {
        res.status(400).json({
            error: 'No text'
        });
    }
}

//exports
module.exports = {
    getText
}