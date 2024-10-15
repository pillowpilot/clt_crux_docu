---
id: ms-users
version: 0.0.1
name: Continental Userbase Enrichment
summary: |
  Microservice responsible for message enrichment |
  with user-related data.
owners:
  - jkuebler
  - jdossantos
  - cgaona
receives:
  - id: whatsapp-business-message-received
    version: 0.0.1
sends:
  - id: message-received
    version: 0.0.1
repository:
  language: C#
  url: TBD
---

