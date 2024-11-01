---
id: ticket-comment-added
name: Ticket Comment Added
version: 0.0.1
summary: |
  Indicates that a comment was added to a ticket
schemaPath: "schema.json"
---

# Ticket Comment Added Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "uuid": "8cdc1228-1950-419d-808d-8682eec42d2c",
  "timestamp": "2024-11-01T02:52:00-03:00",  
  "ticket_id": "TCK-67890",
  "comment": "This is a sample comment added to the ticket.",
  "authorized_by": {
    "agent_id": "AGT-43210"
  }
}
```
