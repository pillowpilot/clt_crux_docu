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

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.conv.open_ticket",
  "uuid": "01234567-89ab-cdef-0123-456789abcdef",
  "timestamp": "2024-10-16 10:12:00Z",
  "user_details": {
    "user_id": "user_789",
    "name": "John Doe"  // Optional, additional user information
  },
  "conversation_id": "conv_xyz",
  "messages": [
    {
      "timestamp": "2024-10-16 10:00:00Z",
      "origin": "user",
      "body": "Hi, I'm having trouble with my account."
    },
    {
      "timestamp": "2024-10-16 10:05:00Z",
      "origin": "flow",
      "body": "Could you please provide more details about the issue?"
    },
    {
      "timestamp": "2024-10-16 10:10:00Z",
      "origin": "user",
      "body": "Sure, I can't seem to log in using my usual credentials."
    }
  ]
}
```
