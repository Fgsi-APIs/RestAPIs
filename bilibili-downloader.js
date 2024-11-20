import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/bilibili', {
  params: {
    'url': 'https://www.bilibili.tv/id/video/00000000'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Go to this website and take the Token'
  }
});

/* == [ RESPONSE ] == */
/*{
  "developer": "FONGSI DEV",
  "status": true,
  "data": {
    "urlVideo": "",
    "urlAudio": ""
  },
  "message": null
}*/
