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

## Main Decision Making Processes

### Message dispatching

There must be a well-defined systemwide procedure to generate a message source id, which must encode **enough information** to dispatch messages to conversations. A proposal is to encode information from the channel (ie. WhatsApp Business) and its *source* within that channel (ie. an phone number), so a WhatsApp Business message from "+595 991 123 456" would become "wa.+595991123456" and an email from "customer@example.com" would be "email.customer@example.com". However with the current project scope, the *source* within each channel seems enough.

An important observation is that the only operation supported for source id is *comparison* (`==` and `!=`). A microservice must not parse a source id and use its components for bussines logic.

List of source id procedures by channel:

* WhatsApp Business API: `"wa.<phone_number>"`
* Email: `"email.<email_address>"`
* Agent: `"agent.<agent_id>"`
* IA Agent: `"aiagent.<>"` TODO

## Structure of a Conversation

### Header

* Conversation Id: Unique string that identifies a conversation. It's set by `ms-conv-store` during its construction.

* Customer Id: Unique string that identifies a customer. For anonymous customers, this attribute is undefined.

* Source Id: Unique string that identifies the source of messages for anonymous customers. For example, if the channel is WhatsApp, it would be a string with the phone number.

* Active channel: Channel through which the system will send its messages **by default**. It's set during the construction of a new conversation.

* State: `open` or `closed`.

### Log (ordered by timestamp)

In the conversation there will be a log of relevant events (messages, agent transfers, ...).

Each entry of the log must be an object with a `type` field indicating the type of entry.

The structure of the `type` field is the following: `vX.Y.Z.<event_type>.<sub_event_type>` where `<event_type>` could be:

* `chat`: each `chat` event correspond to a message send by the customer or an agent,
* `comment`: comments added by agents,
* `state`: update the `state` attribute of the corresponding ticket,
* `assignment`: update the agent assigned.

#### Chat Events

`<event_type>` equals `chat.<message_type>`. The schema is the following:

<SchemaViewer id="5" file="chat-message-schema.json" />

There are two main properties for message type entries: a `fallback_text` and `display_name` for the sender. Even thought a message may contain serveral pieces of string or only an image, a **descriptive** fallback text is required. Analogously, a **descriptive** display name for the sender is also required, ex. "Anon. User (+595 981 123 456)" or "Greetings AutoMessage".

There could be some other fields depending on the actual value of `<message_type>`. Ex. `header`, `body`, and `caption` in the case of a WhatsApp template.

Automated messages, like greetings and farewells, are also included in this category.

The following schema is used for agent messages:
<SchemaViewer id="6" file="chat-agent-message-schema.json" />

The following schema is used for WhatsApp Business messages:
<SchemaViewer id="4" file="whatsapp-business-message-schema.json" />

#### Comments (added by agents)

If `type` equlas `v0.0.1.comment`, the entry refers to a comment done by an agent. This entry is analogous to a message but it's not send or displayed to the customer.

<SchemaViewer id="comment-message-schema" file="comment-message-schema.json" title="Comment Message Schema" maxHeight="500" />

#### Ticket State Change

The entry referers to any change on the ticket state (pending, open, stand by, closed).

* Pending: A ticket initial state is `pending`. Indicates that the chat is assigned to some agent, but he or she is yet to answer to the customer.

* Open: After an agent sends an answer to the customer, the state is set to `open`.

* Stand By: An agent could manually change the state of the chat to `standby`.

* Closed: An agent could manually change the state of the chat to `closed`.

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

<SchemaViewer id="3" file="state-change-message-schema.json" title="Conversation State Change Message Schema" maxHeight="500" />

#### Agent Assignment

If `type` equals `v0.assignment`, the entry refers to a new assigment.

<SchemaViewer id="2" file="agent-assignment-message-schema.json" title="Agent Assignment Message Schema" maxHeight="500" />

### Schema

<SchemaViewer id="1" file="schema.json" title="Conversation Schema" maxHeight="500" />
