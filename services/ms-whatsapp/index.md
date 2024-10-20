---
id: ms-whatsapp
version: 0.0.1
name: WhatsApp Business API
summary: |
  Microservice that handles all interaction with |
  the official WhatsApp API
owners:
  - lbarreiro
  - jdossantos
  - cgaona
sends:
  - id: whatsapp-business-message-received
    version: 0.0.1
  - id: whatsapp-business-message-delivered
    version: 0.0.1
repository:
  language: Java
  url: https://gitea.clt.com.py/CLT/ms-clt-chat-whatsapp
---

# WhatsApp Business API Microservice

## Roadmap

### Text Messages

[Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/text-messages)

#### POST Request Body Example

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "text",
  "text": {
    "preview_url": <ENABLE_LINK_PREVIEW>,
    "body": "<BODY_TEXT>"
  }
}
```

#### Response Example

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"
    }
  ]
}
```

### Template Submission Status Request

### Interactive Reply Buttons Messages

[Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-reply-buttons-messages)

#### POST Request Example

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {<MESSAGE_HEADER>},
    "body": {
      "text": "<BODY_TEXT>"
    },
    "footer": {
      "text": "<FOOTER_TEXT>"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "<BUTTON_ID>",
            "title": "<BUTTON_LABEL_TEXT>"
          }
        }
      ]
    }
  }
}
```

#### Response Example

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"
    }
  ]
}
```

### Document Messages

[Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/document-messages)

#### Request body example

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "document",
  "document": {
    "id" : "<MEDIA_ID>", /* Only if using uploaded media */
    "link": "<MEDIA_URL>", /* Only if linking to your media */
    "caption": "<DOCUMENT_CAPTION>",
    "filename": "<DOCUMENT_FILENAME>"
  }
}
```

#### Response example

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"
    }
  ]
}
```

### Call-to-action Messages

[Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-cta-url-messages)

#### Post Body Example

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<CUSTOMER_PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "cta_url",

    /* Header optional */
    "header": {
      "type": "text",
      "text": "<HEADER_TEXT>"
    },

    /* Body optional */
    "body": {
      "text": "<BODY_TEXT>"
    },

    /* Footer optional */
    "footer": {
      "text": "<FOOTER_TEXT>"
    },
    "action": {
      "name": "cta_url",
      "parameters": {
        "display_text": "<BUTTON_TEXT>",
        "url": "<BUTTON_URL>"
      }
    }
  }
}
```

#### Response Example

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"
    }
  ]
}
```
