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
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "TicketStateChanged",
  "type": "object",
  "properties": {
    "type": {
      "const": "v0.0.1.agents.ticket_state_changed"
    },
    "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
    "timestamp": "2024-10-22T18:23:00Z",
    "ticket_id": "TCK-12345",
    "new_state": "open",
    "authorized_by": {
      "agent_id": "USR-00001"
    }
  },
  "required": [
    "type",
    "uuid",
    "timestamp",
    "ticket_id",
    "new_state",
    "authorized_by"
  ]
}
```
