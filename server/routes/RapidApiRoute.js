// const fetch = require('node-fetch');
import fetch from "node-fetch"

const router = express.Router();

router.route('/').get((req, res)=> {
    res.send('hello from prabhjoit singh')
})


const url = 'https://ocrly-image-to-text.p.rapidapi.com/?imageurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2F1b%2Fe6%2F421be6184e75937bb223c764ecbc2f2e.jpg&filename=sample.jpg';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8c1fd2a597msh082166c7a67d138p177403jsn2207985bcdfd',
    'X-RapidAPI-Host': 'ocrly-image-to-text.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}