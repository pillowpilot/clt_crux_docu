---
id: website-text-message-with-user-info-received
name: Website Text Message With User Info Received
version: 0.0.1
summary: |
  Indicates that there is a new message from an identified customer via the website chatbot widget
schemaPath: "schema.json"
---

# Website Text Message With User Info Received Event

Encodes the event when **Text Message** arrives via the website chatbot widget.

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" />

## Example

```json title="Text Message Example"
{
  "uuid": "your_unique_identifier_here",
  "timestamp": "2024-11-04T18:23:00Z",
  "customer_details": {
    "codigo_cliente": "12345678" // Replace with actual customer code
  },
  "body": "This is a message from the website."
}
```
