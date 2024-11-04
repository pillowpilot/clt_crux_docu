---
id: send-home-banking-text-message
name: Send aText Message via Home Banking
version: 0.0.1
summary: |
  Command to send a text message via the home banking
schemaPath: "schema.json"
---

# Send Home Banking Text Message Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Simple example"
{
  "uuid": "your_unique_identifier_here",
  "timestamp": "2024-11-04T18:23:00Z",
  "session_id": "your_session_id_here",
  "channel": "website",
  "body": "This is a text message sent from to Home Banking platform."
}
```
