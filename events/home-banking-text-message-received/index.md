---
id: home-banking-text-message-received
name: Home Banking Text Message Received
version: 0.0.1
summary: |
  Indicates that there is a new message from the Home Banking
schemaPath: "schema.json"
---

# Home Banking Text Message Received Event

Encodes the event when **Text Message** arrives via Home Banking.

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
  "body": "This is a text message received from the Home Banking user."
}
```
