---
id: get-user-conversation
name: Get Conversation Query by User Information
version: 0.0.1
summary: |
  Query all data related to a conversation by user info
schemaPath: "schema.json"
---

# Get User Conversation Query

## Architecture Diagram

<NodeGraph />

<SchemaViewer file="schema.json" />

`start_timestamp` and `end_timestamp` encode the period to use while filtering the log. They are analogous to pagination. We have that `start_timestamp` must be lower or equal to `end_timestamp`, for example `start_timestamp` could be `2024-10-20T23:15:00Z` (October, 20th) and `end_timestamp` could be `2024-10-31T23:15:00Z` (October, 31th).

If `start_timestamp` is not present, it means that the request includes everything from the begining of the log. Analogously, if `end_timestamp` is not present, include everything until the end. Naturally, if any of them is present, include everything.

## Examples

```json title="From the 10th to the 20th"
{
  "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
  "timestamp": "2024-10-31T23:15:00Z",
  "codigo_cliente": "cod_12345",
  "start_timestamp": "2024-10-10T22:00:00Z", // October, 10th
  "end_timestamp": "2024-10-20T22:00:00Z" // October, 20th
}
```

```json title="Include everything"
{
  "uuid": "b4f78e8c-40be-429b-83d2-e1d12a829841",
  "timestamp": "2024-10-31T23:15:00Z",
  "codigo_cliente": "cod_12345",
}
```
