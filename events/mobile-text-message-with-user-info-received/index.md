---
id: mobile-text-message-received
name: Mobile Text Message Received
version: 0.0.1
summary: |
  Indicates that there is a new message from the mobile app
schemaPath: "schema.json"
---

# Mobile App Text Message Received Event

Encodes the event when **Text Message** arrives via mobile app.

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" />

## Example

```json title="Text Message Example"
{
  "uuid": "987fedcba-4321-5678-abcd-ef0123456789",
  "timestamp": "2024-10-14T18:23:00Z",
  "customer_details": {
    "codigo_cliente": "cod_12345"
  },
  "body": "Hi! I need help with my credit card."
}
```
