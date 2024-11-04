---
id: home-banking-text-message-with-user-info-received
name: Home Banking Text Message With User Info Received
version: 0.0.1
summary: |
  Indicates that there is a new message from the Home Banking with user/customer info
schemaPath: "schema.json"
---

# Home Banking Text Message Received With User Info Event

Encodes the event when **Text Message** arrives via Home Banking. Includes information about the customer/user.

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Text Message Example"
{
  "uuid": "your_unique_identifier_here",
  "timestamp": "2024-11-04T18:23:00Z",
  "session_id": "your_session_id_here",
  "channel": "mobile", // Replace with "website" if applicable
  "customer_details": {
    "codigo_cliente": "cod_123456" // TODO Ver con Kuebler mas fields
  },
  "body": "This is a text message received from the Home Banking user."
}
```
