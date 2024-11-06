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

/* ===== [ RESPONSE ] =====
{
  "developer": "FONGSI DEV",
  "status": true,
  "data": [
    {
      "title": "",
      "description": " ",
      "created_at": "Sat, 17 Aug 2024 15:06:01 +0000",
      "owner": {
        "node_id": "",
        "ads_only_profile_site": null,
        "full_name": "",
        "username": "",
        "id": "",
        "image_large_url": "https://s.pinimg.com/images/user/default_140.png",
        "verified_identity": {},
        "image_medium_url": "https://s.pinimg.com/images/user/default_75.png",
        "follower_count": 265,
        "image_small_url": "https://s.pinimg.com/images/user/default_30.png",
        "is_verified_merchant": false,
        "urls": [
          {
            "resolution": "170x"
          }
        ]
      },
      "urls": [
        {
          "url": "",
          "resolution": "170x"
        },
        {
          "url": "",
          "resolution": "236x"
        },
        {
          "url": "",
          "resolution": "474x"
        },
        {
          "url": "",
          "resolution": "736x"
        },
        {
          "url": "",
          "resolution": "orig"
        }
      ]
    }, {}, {}, {}
  ],
  "message": null
}*/
