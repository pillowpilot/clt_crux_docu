---
id: ai-agent-answer-generated
name: AI Agent Answer Generated
version: 0.0.1
summary: |
  Indicates that there is a new message from an ai agent
schemaPath: "schema.json"
---
# AI Agent Answer Generated Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.0.1.agent.ai_answer_generated.text",
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-15 14:57:00Z",
  "agent_details": {
    "codename": "maxwell",  // Optional, additional details
    "version": "2.3",       // Optional, additional details
  },
  "conversation_id": "789",
  "body": "Hi there! I'm John, one of the support agents assisting you today. I understand you have a question about [topic]. Here's how I can help..."
}
```
