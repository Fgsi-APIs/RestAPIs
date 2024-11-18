import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/twittercomment', {
  params: {
    'pp': 'https://avatars.githubusercontent.com/u/96420420',
    'name': 'FongsiDev',
    'username': 'fongsidev',
    'message': 'Helo',
    'retweet': '999k',
    'comment': '999k',
    'like': '999k'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Take Tokens from the website, Free for 1 Week'
  }
});

/* ===== [ RESPONSE ( Binary File ) ] ===== */
