---
id: generate-ai-agent-answer-with-user-info
name: Generate AI Agent Answer With Customer Information
version: 0.0.1
summary: |
  Command to send a query (with context and customer information) to an AI agent.
schemaPath: "schema.json"
---
# Generate AI Agent Answer With User Info Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "uuid": "your_unique_identifier_here",
  "timestamp": "2024-11-03T17:08:00Z",
  "user_details": {
    "codigo_cliente": "12345678"  // Replace with actual customer code
  },
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
