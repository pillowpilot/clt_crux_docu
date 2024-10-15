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

