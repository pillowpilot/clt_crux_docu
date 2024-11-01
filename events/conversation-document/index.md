---
id: conversation-document
name: Conversation Document
version: 0.0.1
summary: |
  Document with all data related to a conversation
schemaPath: "schema.json"
---

# Conversation Document

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "uuid": "8cdc1228-1950-419d-808d-8682eec42d2c",
  "timestamp": "2024-11-01T02:52:00-03:00",
  "conversation": {
    /* Add details about the conversation here. See ms-conv-store */
  }
}
```
