---
id: get-conversation
name: Get Conversation Query
version: 0.0.1
summary: |
  Query all data related to a conversation
schemaPath: "schema.json"
---
# Get Conversation Query

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "GetConversation",
  "type": "object",
  "properties": {
    "type": {
      "const": "v0.agents.get_conversation"
    },
    "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
    "timestamp": "2024-10-22T18:23:00Z",
    "conversation_id": "CONV-12345" // Replace with the actual conversation ID
  },
  "required": [
    "type",
    "uuid",
    "timestamp",
    "conversation_id"
  ]
}
```
