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
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ConversationDocument",
  "type": "object",
  "properties": {
    "type": {
      "const": "v0.0.1.conv.conversation_document"
    },
    "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
    "timestamp": "2024-10-22T18:23:00Z",
    "conversation": {
      // This object can contain various properties depending on your conversation model
      "conversation_id": "CONV-12345",
      "messages": [] // Placeholder
    }
  },
  "required": ["type", "uuid", "timestamp", "conversation"]
}
```
