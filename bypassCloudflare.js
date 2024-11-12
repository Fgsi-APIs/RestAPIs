import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/bypassCloudflare', {
  params: {
    'url': 'https://ouo.io'
  },
  headers: {
    'accept': 'application/json',
    'X-WP-Nonce': 'Take Tokens from the website, Free for 1 Week'
  }
});

/* ===== [ RESPONSE ] =====
{
  "developer": "FONGSI DEV",
  "status": true,
  "data": {
    "status": 200,
    "statusText": "OK",
    "responseText": "<!DOCTYPE html>\n<html ...."
  },
  "message": null
}*/
