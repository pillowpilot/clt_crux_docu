---
id: start-flow-execution
name: Start Flow Execution
version: 0.0.1
summary: |
  Command to run a new flow
schemaPath: "schema.json"
---
# Start Flow Execution Command

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Example

```json title="Message Example"
{
  "type": "v0.conv.start_flow_execution",
  "uuid": "34567890-1234-abcd-efgh-56789abcdef",
  "timestamp": "2024-10-15 18:37:00Z",
  "user_details": {
    "user_id": "user_123",  // Replace with actual user identifier
    "language": "en-US",  // Optional, user's language preference
    "name": "John Doe" // Option, user's name
  },
  "initial_message": "Hi, I'm having trouble logging in to my account."
}
```
