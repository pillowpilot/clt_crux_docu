---
id: send-home-banking-text-message-with-user-info
name: Send aText Message With User Info via Home Banking
version: 0.0.1
summary: |
  Command to send a text message via the home banking with user/customer information
schemaPath: "schema.json"
---

# Send Home Banking Text Message with User Info Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Simple example"
{
  "uuid": "your_unique_identifier_here",
  "timestamp": "2024-11-04T18:23:00Z",
  "session_id": "your_session_id_here",
  "channel": "mobile",
  "customer_details": {
    "codigo_cliente": "12345678" // Replace with actual customer code
  },
  "body": "This is a text message sent from the Home Banking platform with your information."
}
```
