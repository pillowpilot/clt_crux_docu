---
id: send-whatsapp-business-message
name: Send WhatsApp Business Message
version: 0.0.1
summary: |
  Command to send a message through the official WhatsApp API
schemaPath: "schema.json"
---

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.users.send_whatsapp_business_message",
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-14T19:34:00Z",
  "sender": "+521234567891",
  "receiver": "+521234567890",
  "body": "Thank you for your recent purchase! We hope you enjoy your new product."
}
```
