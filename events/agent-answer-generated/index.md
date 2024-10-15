---
id: agent-answer-generated
name: Agent Answer Generated
version: 0.0.1
summary: |
  Indicates that there is a new message from an agent
schemaPath: "schema.json"
---
# Agent Answer Generated Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.agent.answer_generated",
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-15 14:57:00Z",
  "agent_id": "jdoe",
  "agent_details": {
    "name": "John Doe"  // Optional, additional details about the agent
  },
  "conversation_id": "789",
  "body": "Hi there! I'm John, one of the support agents assisting you today. I understand you have a question about [topic]. Here's how I can help..."
}
```
