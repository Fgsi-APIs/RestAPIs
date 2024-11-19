import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/bard', {
  params: {
    'content': 'Helo Bard, Apa kabar'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Take Tokens from the website, Free for 1 Week'
  }
})

/* RESPONSE */
/*{
  "developer": "FONGSI DEV",
  "status": true,
  "data": {
    "answer": "Tampilkan draf\n\nHello! I'm doing well, thank you for asking. How are you today? 😊"
  },
  "message": null
}*/
