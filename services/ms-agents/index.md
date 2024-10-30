---
id: ms-agents
version: 0.0.1
name: CLT CRM
summary: |
  Microservice responsible of the interaction between the CRM and CRUX
owners:
  - jdossantos
  - cgaona
receives:
  - id: message-added
    version: 0.0.1
  - id: open-ticket
    version: 0.0.1
  - id: conversation-document
    version: 0.0.1
sends:
  - id: agent-answer-generated
    version: 0.0.1
  - id: ticket-opened
    version: 0.0.1
  - id: ticket-closed
    version: 0.0.1
  - id: ticket-state-changed
    version: 0.0.1
  - id: ticket-comment-added
    version: 0.0.1
  - id: agent-assigned
    version: 0.0.1
  - id: get-conversation
    version: 0.0.1
repository:
  language: C#
  url: TDB
---
