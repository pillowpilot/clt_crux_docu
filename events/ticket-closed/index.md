---
id: ticket-closed
name: Ticket Closed
version: 0.0.1
summary: |
  Indicates that a new ticket was closed
schemaPath: "schema.json"
---
# Ticket Closed Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.agents.ticket_closed",
  "uuid": "fedcba09-8765-4321-abcd-ef0123456789",
  "timestamp": "2024-10-15 17:25:00Z",
  "ticket_id": "TCK-12345",  // Replace with actual ticket ID
  "conversation_id": "conv_987"
}
```
