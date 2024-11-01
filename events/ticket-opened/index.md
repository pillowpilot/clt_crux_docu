---
id: ticket-opened
name: Ticket Opened
version: 0.0.1
summary: |
  Indicates that a new ticket was opened
schemaPath: "schema.json"
---

# Ticket Opened Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "uuid": "fedcba09-8765-4321-abcd-ef0123456789",
  "timestamp": "2024-10-15 17:25:00Z",
  "ticket_id": "TCK-12345",
  "conversation_id": "conv_987"
}
```
