---
id: ms-gateway
version: 0.0.1
name: Continental Gateway
summary: |
  Microservice responsible with every interaction with Continental Bank. It handles: message enrichment with user-related data, exposure of the official website and the mobile app as channels.
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
  url: https://gitea.clt.com.py/CLT/ms-clt-chat-gateway
---

# Continental Bank Gateway Microservice

## Main Responsabilities

* Enrich incomming messages with user-related data (if any).
* Receive and send messages to the official website widget.
* Receive and send messages to the official mobile app.
