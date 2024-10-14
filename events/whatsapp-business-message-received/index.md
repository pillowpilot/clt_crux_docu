---
id: whatsapp-business-message-received
name: WhatsApp Business API Message Received
version: 0.0.1
summary: |
  Indicates that there is a new message |
  from the WhatsApp Business API
schemaPath: 'schema.json'
---


## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.wa.message_received",  
  "uuid": "987fedcba-4321-5678-abcd-ef0123456789",
  "timestamp": "2024-10-14T18:23:00Z",
  "sender": "+15551234567",  
  "receiver": "+15551234568",
  "body": "Hi! Just checking in about my recent order."
}
```
