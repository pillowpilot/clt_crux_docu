---
id: flow-execution-ended
name: Flow Execution Ended
version: 0.0.1
summary: |
  Indicates that some flow has finished.
schemaPath: "schema.json"
---
# Flow Execution Ended Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.flows.execution_ended",
  "uuid": "34567890-abcd-efgh-1234-56789abcdef",
  "timestamp": "2024-10-15 16:12:00Z",
  "flow_execution_id": "54321",
  "flow_type": "rigid",  // Or "agent-dispatch" depending on the type of flow
  "conversation_id": "456",
  "is_ticket_required": false  // Change to true if a ticket needs to be created
}
```
