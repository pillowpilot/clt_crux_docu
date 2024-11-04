---
id: send-website-message
name: Send Website Widget Message
version: 0.0.1
summary: |
  Command to send a message to the chatbot widget
schemaPath: "schema.json"
badges:
  - content: Deprecated
    backgroundColor: red
    textColor: red
---
# Send Website Widget Message Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Simple example"
{
  "uuid": "38400000-8cf0-11bd-b23e-10b96e4ef00d",
  "timestamp": "2024-10-31T23:51:22Z",
  "sender": "", // TODO
  "receiver": "sessionid_12345", // TODO Definir con Kuebler
  "body": "This is a sample mobile message."
}
```
