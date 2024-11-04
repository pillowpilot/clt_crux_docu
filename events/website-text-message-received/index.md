---
id: website-text-message-received
name: Website Text Message Received
version: 0.0.1
summary: |
  Indicates that there is a new message from the website chatbot widget
schemaPath: "schema.json"
---

# Website Text Message Received Event

Encodes the event when **Text Message** arrives via the website chatbot widget.

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" />

## Example

```json title="Text Message Example"
{
  "uuid": "987fedcba-4321-5678-abcd-ef0123456789",
  "timestamp": "2024-10-14T18:23:00Z",
  "sessionid": "f45d8321-9402-4889-b146-7f72e079a83c",
  "body": "List every product."
}
```
