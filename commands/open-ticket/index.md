---
id: open-ticket
name: Open Ticket
version: 0.0.1
summary: |
  Command to open a new ticket
schemaPath: "schema.json"
---
# Open Ticket Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Examples

```json title="Open a ticket for an anonymous customer"
{
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-16 10:12:00Z",
  "conversation_id": "conv_xyz"
}
```

```json title="Open a ticket for an identified customer"
{
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-16 10:12:00Z",
  "conversation_id": "conv_xyz",
  "user_details": {
    "user_id": "user_789",
    "name": "John Doe" // TODO Definir con Kuebler
  }
}
```
