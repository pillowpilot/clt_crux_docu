---
id: agent-assigned
name: Agent Assigned
version: 0.0.1
summary: |
  Indicates that an agent was assigned to a ticket
schemaPath: "schema.json"
---

# Agent Assigned Event

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

## Example

```json title="Message Example"
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "AgentAssignedToTicket",
  "type": "object",
  "properties": {
    "type": {
      "const": "v0.0.1.agents.agent_assigned"
    },
    "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
    "timestamp": "2024-10-22T18:23:00Z",
    "ticket_id": "TCK-12345",
    "agent_assigned": {
      "agent_id": "USR-00002" // Agent ID to whom the ticket is assigned
    },
    "authorized_by": {
      "agent_id": "USR-00001" // Agent ID who authorized the assignment
    }
  },
  "required": [
    "type",
    "uuid",
    "timestamp",
    "ticket_id",
    "agent_assigned",
    "authorized_by"
  ]
}
```
