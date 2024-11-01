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
  "uuid": "f7800098-e089-4989-aea4-ab97ef071452",
  "timestamp": "2024-10-31T23:51:22Z",
  "ticket_id": "TCK-12345",
  "agent_assigned": {
    "agent_id": "AGT-98765"
  },
  "authorized_by": {
    "agent_id": "AGT-00001"
  }
}
```
