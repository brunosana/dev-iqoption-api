## Auth

URL
```
https://auth.iqoption.com/api/v2/login
```

Body
```JSON
{
	"identifier": "login",
	"password": "password"
}
```

Response
```JSON
{
    "code": "success",
    "ssid": "ssidHere"
}
```

New Cookie

| Name | Type   |
|------|--------|
| ssid | string |

## Get Register Data

URL
```
https://iqoption.com/api/register/getregdata
```

Body - None

Cookie Required
```
ssid
```

Response
```JSON
{
  "isSuccessful": true,
  "message": [],
  "result": {
    "country": [...],
    "phone_codes": {...},
    "currency": [...],
    "currency_enabled": 1,
    "profile": {
      "avatar": "",
      "confirmation_required": 0,
      "popup": [],
      "money": {
        "deposit": {
          "min": 4,
          "max": 1000000
        },
        "withdraw": {
          "min": 4,
          "max": 1000000
        }
      },
      "user_group": "userGroup",
      "balance": 0,
      "balance_id": 123456789,
      "balance_type": 0,
      "messages": 0,
      "id": 123456789,
      "demo": 0,
      "public": 1,
      "group_id": 123,
      "name": "Firstname Lastname",
      "nickname": null,
      "currency": "BRL",
      "currency_char": "R$",
      "mask": "R$ %s",
      "city": "",
      "user_id": 123456,
      "first_name": "Firstname",
      "last_name": "Lastname ",
      "phone": "x *****xxxx",
      "email": "email_here",
      "created": 123456789,
      "last_visit": false,
      "site_id": 1,
      "company_id": 2,
      "tz": "Europe\/Malta",
      "locale": "pt_PT",
      "birthdate": false,
      "country_id": 30,
      "currency_id": 6,
      "gender": "male",
      "address": "",
      "postal_index": "",
      "timediff": -3600,
      "tz_offset": 120,
      "balances": [],
      "infeed": 1,
      "confirmed_phones": [],
      "need_phone_confirmation": null,
      "rate_in_one_click": false,
      "deposit_in_one_click": false,
      "kyc_confirmed": false,
      "kyc": {...},
      "trade_restricted": false,
      "auth_two_factor": null,
      "deposit_count": 0,
      "is_activated": true,
      "new_email": "",
      "tc": true,
      "trial": false,
      "is_islamic": false,
      "tin": "",
      "personal_data_policy": {...},
      "client_category_id": 1,
      "tournaments_ids": null,
      "socials": {},
      "flag": "BR",
      "cashback_level_info": {...},
      "user_circle": null,
      "skey": "123456789",
      "forget_status": {
        "status": "none",
        "created": null,
        "expires": null
      },
      "account_status": "NONE",
      "nationality": "",
      "ssid": false,
      "is_vip_group": false
    },
    "tz": {...},
    "address": "",
    "postal_index": "",
    "city": "",
    "nationality": "",
    "questions": [],
    "rate_in_one_click": false,
    "deposit_in_one_click": false,
    "social_key": "123456789"
  }
}
```

New Cookie

| Name | Type   |
|------|--------|
| __uat | string |

## IQOption Websockets

URL
```
wss://iqoption.com/echo/websocket
```
