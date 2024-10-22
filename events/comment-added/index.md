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
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "TicketCommentAdded",
  "type": "object",
  "properties": {
    "type": {
      "const": "v0.0.1.agents.ticket_comment_added"
    },
    "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
    "timestamp": "2024-10-22T18:23:00Z",
    "ticket_id": "TCK-12345",
    "comment": "This is a sample comment added to the ticket.",
    "authorized_by": {
      "agent_id": "USR-00001"
    }
  },
  "required": [
    "type",
    "uuid",
    "timestamp",
    "ticket_id",
    "comment",
    "authorized_by"
  ]
}
```
