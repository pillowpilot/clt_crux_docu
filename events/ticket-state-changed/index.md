---
id: ticket-state-changed
name: Ticket State Changed
version: 0.0.1
summary: |
  Indicates that a the state attribute of a ticket was changed
schemaPath: "schema.json"
---

# Ticket State Changed Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "uuid": "8cdc1228-1950-419d-808d-8682eec42d2c",
  "timestamp": "2024-11-01T02:52:00-03:00",
  "ticket_id": "TCK-12345",
  "new_state": "standby",
  "authorized_by": {
    "agent_id": "AGT-00001"
  }
}
```
