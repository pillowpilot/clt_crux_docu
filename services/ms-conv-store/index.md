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

A conversation is a sequence of messages exchanged between a customer and the system during a short period of time. Each message is associated with a channel (WhatsApp, email, agent, flow, etc.), which is the medium through which the message was sent.

The structure of a message will continue to change in the future, however its storage must comply with the following properties:

1. Self-contained: Each message must be self-contained and contain all the necessary information to **render it**. This includes the sender, receiver, timestamp, channel, content (that could be a simple string or a more complex object representing a WhatsApp Template Message with images), and any other relevant metadata.

2. TODO Discus more relevant properties.

A conversation could be `open` or `closed`. The conditions to close a conversation are:

1. End of flow execution without the order for a new ticket.

2. End of ticket.

3. By policy: **TBD** For example, a conversation without a new message in the last 24hs must be closed.

A conversation has an `active channel` property always set. The `active channel` sets the channel though witch the system sends its messages by default. However, a message could be send to another channel if requested.

## Structure of a Conversation

### Header

Some description of the header of a conversation

### Message List (ordered by timestamp)

Some description of the list of messages of a conversation

### Schema

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />
