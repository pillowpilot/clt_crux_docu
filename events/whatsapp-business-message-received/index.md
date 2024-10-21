---
id: whatsapp-business-message-received
name: WhatsApp Business API Message Received
version: 0.0.1
summary: |
  Indicates that there is a new message from the WhatsApp Business API
schemaPath: 'schema.json'
---
# WhatsApp Business API Message Received Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Text Message Example"
{
  "type": "v0.0.1.wa.message_received.text",  
  "uuid": "987fedcba-4321-5678-abcd-ef0123456789",
  "timestamp": "2024-10-14T18:23:00Z",
  "sender": "+15551234567",  
  "receiver": "+15551234568",
  "message_id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA",
  "body": "Hi! Just checking in about my recent order."
}
```
