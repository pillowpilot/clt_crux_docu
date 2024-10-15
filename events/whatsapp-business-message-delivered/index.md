---
id: whatsapp-business-message-delivered
name: WhatsApp Business API Message Delivered
version: 0.0.1
summary: |
  Indicates that a send message was delivered
schemaPath: 'schema.json'
---
# WhatsApp Business API Message Delivered Event

## TODO

* Research WhatsApp official API to get the proper way to identify a message.

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.wa.message_delivred",  
  "uuid": "987fedcba-4321-5678-abcd-ef0123456789",
  "timestamp": "2024-10-14T18:23:00Z",
  "sender": "+15551234567",  
  "receiver": "+15551234568",
  "message_id": "ef0123456789"
}
```
