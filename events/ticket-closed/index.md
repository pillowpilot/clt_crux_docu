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
  "uuid": "8cdc1228-1950-419d-808d-8682eec42d2c",
  "timestamp": "2024-11-01T02:52:00-03:00",
  "ticket_id": "TCK-12345",
  "conversation_id": "CONV-98765",
  "authorized_by": {
    "agent_id": "AGT-00001"
  }
}
```
