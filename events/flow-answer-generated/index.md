---
id: flow-answer-generated
name: Flow Answer Generated
version: 0.0.1
summary: |
  Indicates that there is a new message from a flow
schemaPath: "schema.json"
---

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.flows.answer_generated",
  "uuid": "fedcba09-8765-4321-abcd-ef0123456789",
  "timestamp": "2024-10-15 10:23:00Z",
  "flow_execution_id": "12345",
  "flow_type": "rigid",
  "conversation_id": "123",
  "body": "Thank you for your question! Based on your previous answers, the best option for you seems to be..."
}
```
