---
id: generate-ai-agent-answer
name: Generate AI Agent Answer Without Customer Information
version: 0.0.1
summary: |
  Command to send a query (with context) to an AI agent.
schemaPath: "schema.json"
---
# Generate AI Agent Answer Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "uuid": "your_unique_identifier_here",
  "timestamp": "2024-11-03T17:08:00Z",
  "conversation": {
    "uuid": "CONV-12345",
    "log": [
      {
        "timestamp": "2024-11-03T17:00:00Z"
      },
      {
        "timestamp": "2024-11-03T17:05:00Z"
      }
    ]
  }
}
```
