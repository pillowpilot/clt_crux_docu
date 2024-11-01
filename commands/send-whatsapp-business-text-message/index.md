---
id: send-whatsapp-business-text-message
name: Send WhatsApp Business Text Message
version: 0.0.1
summary: |
  Command to send a text message through the official WhatsApp API
schemaPath: "schema.json"
---

# Send WhatsApp Business API Text Message Command

[Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/text-messages)

- Body: Required. Message body text. Supports URLs. Maximum 4096 characters.

- Link Preview: You can have the WhatsApp client attempt to render a preview of the first URL in the body text string, if it contains one. URLs must begin with `http://` or `https://`. If multiple URLs are in the body text string, only the first URL will be rendered. If omitted, or if unable to retrieve a link preview, a clickable link will be rendered instead.

```json title='POST Request Body Example'
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "text",
  "text": {
    "preview_url": <ENABLE_LINK_PREVIEW>, // Optional boolean
    "body": "<BODY_TEXT>" // Required
  }
}
```

```json title='Response Example'
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

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Examples

```json title="Message Example"
{
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-14T19:34:00Z",
  "sender": "+521234567891",
  "receiver": "+521234567890",
  "body": "Thank you for your recent purchase! We hope you enjoy your new product."
}
```
