import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/pinterest', {
  params: {
    'text': 'Anime'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Go to this website and take the Token'
  }
});
