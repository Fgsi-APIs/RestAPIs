import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/bard-img', {
  params: {
    'content': 'Ini gambar apa',
    'url': 'Link Gambar'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Take Tokens from the website, Free for 1 Week'
  }
});

/* == [ RESPONSE ] == */
/*{
  developer: 'FONGSI DEV',
  status: true,
  data: {
    answer: ''
  },
  message: null
}*/
