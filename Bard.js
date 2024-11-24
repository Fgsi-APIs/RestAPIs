import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/bard', {
  params: {
    'content': 'Apa itu BardAI?',
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
