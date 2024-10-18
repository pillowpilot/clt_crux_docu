---
id: ms-conv-store
version: 0.0.1
name: Conversation Store
summary: |
  Microservice that stores all conversations and abstract the notion of a channel from the rest of the system
owners:
  - jdossantos
  - cgaona
receives:
  - id: message-received
    version: 0.0.1
  - id: whatsapp-business-message-delivered
    version: 0.0.1
  - id: flow-answer-generated
    version: 0.0.1
  - id: agent-answer-generated
    version: 0.0.1
  - id: flow-execution-ended
    version: 0.0.1
  - id: ticket-closed
    version: 0.0.1
sends:
  - id: send-whatsapp-business-message
    version: 0.0.1
  - id: start-flow-execution
    version: 0.0.1
  - id: message_added
    version: 0.0.1
  - id: open-ticket
    version: 0.0.1
repository:
  language: TDB
---

# Top-level

## TODO

1. Set a versioning schema for messages.

## Semantics of a Conversation

A conversation stores all events related to a customer and the system. In particular, it stores all messages between a customer and the system. Each message is associated with a channel, which is the medium through which the message was sent.

The structure of an event will continue to change in the future, however its storage must comply with the following properties:

1. Self-contained: Each message must be self-contained and contain all the necessary information to **render it**. For example, for each message we store the sender, the receiver, a timestamp, the channel, the content (that could be a simple string or a more complex object representing a WhatsApp Template Message with images), and any other relevant metadata.

2. TODO Discus more relevant properties.

A conversation could be `open` or `closed` (do not confuse this with possible states of a ticket: `pending`, `open`, `standby`, `closed`). The conditions to close a conversation are:

1. Command from an IA agent.

2. Command from an agent (ticket closed)

3. By policy: **TBD** For example, a conversation without a new message in the last 24hs must be closed.

For identified customers, their corresponding conversation became `open` after a new message even though the conversation was previously closed.

A conversation with an anonymous customer becomes inmutable after it has been closed.

A conversation has an `active channel` attribute always set. The `active channel` sets the channel though which the system sends its messages by default. However, a message could be send to another channel if requested.

## Structure of a Conversation

### Header

- Conversation Id: Unique string that identifies a conversation. It's set by `ms-conv-store` during its construction.

- Customer Id: Unique string that identifies a customer. For anonymous customers, this attribute is undefined.

- Source Id: Unique string that identifies the source of messages for anonymous customers. For example, if the channel is WhatsApp, it would be a string with the phone number.

- Active channel: Channel through which the system will send its messages **by default**. It's set during the construction of a new conversation.

- State: `open` or `closed`.

### Log (ordered by timestamp)

In the conversation there will be a log of relevant events (messages, agent transfers, ...).

Each entry of the log must be an object with a `type` field indicating the type of entry.

If `type` equals `v0.0.1.chat.<message_type>`, the entry referers to a message send by the customer or the system (agent or flow). Its schema is the following:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ChatMessage",
  "type": "object",
  "properties": {
    "type": { "const": "v0.0.1.chat.<message_type>" },
    "timestamp": { "type": "string", "format": "date-time" },
    "fallback_text": { "type": "string" },
    "sender": {
      "type": "object",
      "properties": {
        "display_name": { "type": "string" },
        "$comment": "TODO other fields depending of <message_type>"
      },
      "$comment": "other fields depending of <message_type>",
      "required": ["display_name"]
    }
  },
  "required": ["type", "fallback_text", "sender"]
}
```

There are two main properties for message type entries: a `fallback text` and `display name` for the sender. Even thought a message may contain serveral pieces of string or only an image, a **descriptive** fallback text is required. Analogously, a **descriptive** display name for the sender is also required, ex. "Anon. User (+595 981 123 456)" or "Greetings AutoMessage".

There could be some other fields depending on the actual value of `<message_type>`. Ex. `header`, `body`, and `caption` in the case of a WhatsApp template.

Automated messages, like greetings and farewells, are also included in this category.

#### message_type is `agent.free_text`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ChatMessage",
  "type": "object",
  "properties": {
    "type": { "const": "v0.0.1.chat.agent.free_text" },
    "timestamp": { "type": "string", "format": "date-time" },
    "fallback_text": { "type": "string" },
    "sender": {
      "type": "object",
      "properties": {
        "display_name": { "type": "string" },
        "agent_id": { "type": "integer" },
        "$comment": "add more fields if any"
      },
      "required": ["display_name"]
    }
  },
  "required": ["type", "timestamp", "fallback_text", "sender"]
}
```

#### message_type is `wa.free_text`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ChatMessage",
  "type": "object",
  "properties": {
    "type": { "const": "v0.0.1.chat.wa.free_text" },
    "timestamp": { "type": "string", "format": "date-time" },
    "fallback_text": { "type": "string" },
    "sender": {
      "type": "object",
      "properties": {
        "display_name": { "type": "string" },
        "phone_number": { "type": "string" }
      },
      "required": ["display_name", "phone_number"]
    }
  },
  "required": ["type", "timestamp", "fallback_text", "sender"]
}
```

#### Comments (added by agents)

If `type` equlas `v0.0.1.comment`, the entry refers to a comment done by an agent. This entry is analogous to a message but it's not send or displayed to the customer.

<SchemaViewer id="comment-message-schema" file="comment-message-schema.json" title="Comment Message Schema" maxHeight="500" />

#### State Change

If `type` equals `v0.0.1.state`, the entry referers to any change on its state (pending, open, stand by, closed).

- Pending: A chat initial state. Indicates that the chat is assigned to some agent, but he or she is yet to answer to the customer.

- Open: After an agent sends an answer to the customer, the chat state is set to open.

- Stand By: An agent could change the state of the chat to stand by.

- Closed: An agent could change the state of the chat to stand by.

TODO Add state diagram

```txt
@startuml
hide empty description
[*] --> Pending

Pending --> Open : after agent assignment
Open --> Standby : after action from agent
Standby --> Open : after action from agent
Open --> Closed : after action from agent
Standby --> Closed : after action from agent

Closed --> [*]
@enduml
```

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Event",
  "type": "object",
  "properties": {
    "type": { "const": "v0.0.1.state" },
    "new_state": { "enum": ["pending", "open", "standby", "closed"] },
    "authorized_by": {
      "type": "object",
      "properties": {
        "agent_id": { "type": "integer" },
        "display_name": { "type": "string" }
      },
      "required": ["agent_id", "display_name"]
    }
  },
  "required": ["type", "new_state", "authorized_by"]
}
```

#### Agent Assignment

If `type` equals `v0.assignment`, the entry refers to a new assigment.

<SchemaViewer id="2" file="agent-assignment-message-schema.json" title="Agent Assignment Message Schema" maxHeight="500" />

### Schema

<SchemaViewer id="1" file="schema.json" title="Conversation Schema" maxHeight="500" />