import axios from 'axios';

const response = await axios.get('https://fongsi-scraper-rest-api.koyeb.app/bypassCloudflareV2', {
  params: {
    'url': 'https://fongsi-scraper-rest-api.koyeb.app'
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
    "results": [
      {
        "content": "<!DOCTYPE html><html ...",
        "headers": {
          "date": "Wed, 13 Nov 2024 10:19:43 GMT",
          "etag": "W/\"acef-1NCX5L/rjTVMjrHCMf7cMKMEDN4\"",
          "vary": "Origin",
          "cf-ray": "8e1e066d7d5f2ec6-LAX",
          "server": "cloudflare",
          "alt-svc": "h3=\":443\"; ma=86400",
          "x-koyeb-glb": "sfo",
          "content-type": "text/html; charset=utf-8",
          "x-powered-by": "Express",
          "cf-cache-status": "DYNAMIC",
          "x-koyeb-backend": "fra",
          "content-encoding": "br",
          "x-envoy-upstream-service-time": "158",
          "access-control-allow-credentials": "true"
        },
        "cookies": [],
        "status_code": 200,
        "url": "https://fongsi-scraper-rest-api.koyeb.app/",
        "task_id": "7262408763494120449",
        "created_at": "2024-11-13 10:19:38",
        "updated_at": "2024-11-13 10:19:58"
      }
    ]
  },
  "message": null
}*/
