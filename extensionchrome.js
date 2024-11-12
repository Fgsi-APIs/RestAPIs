import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/extensionchrome', {
  params: {
    'url': 'https://chromewebstore.google.com/detail/.../...'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Take Tokens from the website, Free for 1 Week'
  }
})

/* Response */
// Binary File
