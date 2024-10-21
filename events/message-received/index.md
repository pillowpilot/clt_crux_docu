---
id: message-received
name: Message Received
version: 0.0.1
summary: |
  Indicates that there is a new message from some channel. This event is also enriched with user data, if the sender details correspond to some user.
schemaPath: "schema.json"
---
# Message Received Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="WhatsApp Business Message Example"
{
  "type": "v0.0.1.users.message_received",
  "uuid": "123e4567-e89b-12d3-a456-426655440000",
  "timestamp": "2024-10-14T11:07:00Z",
  "sender": "+595981123456",
  "receiver": "+595982456789",
  "body": "Hello, how are you doing?",
  "source_id": "+959981123456",
  "channel": "whatsapp-business",
  "channel_details": {
    "phone_number": "+595981123456"
  },
  "user_details": {
    "id": 15564,
    "name": "John",
    "accounts": {
        "id": 14558,
        "balance": 1000
    }
  }
}
```
