---
id: index
---

# CRUX

## Ubiquitous Language

Ubiquitous Language is a cornerstone of Domain-Driven Design (DDD). It's a common language shared by domain experts, developers, and other stakeholders involved in a software project. This shared language ensures that everyone involved in the project is speaking the same language, reducing misunderstandings and improving communication.

* Identified Customer: An human with an issue, but there is at least one Continental bank account associated to this customer.

* Anonymous Customer: An human with an issue. We discriminate between two anonymous customers via some channel details, like phone numbers if the channel is WhatsApp or the sessionid cookie or emails.

* Agent: An **human** responsible for solving issues by messaging with customers.

* IA Agent: An **IA** responsible for solving issues by messaging with customers.

* Workgroup: Set of agents. Useful for ticket assignment.

* Chat: Interactions between the customer and some agents (could be one or several). A chat is a list of messages. Each message has a sender.

* Ticket: A ticket is an attempt to solve an issue. It contains a chat and several attributes, like "agent currently assigned" and "state".

* Channel: Medium through which a message is send/received, like WhatsApp Business API, email, etc.

* Conversation: Document stored at `ms-conv-store`. For **identified** customers, there's only one conversation associated to that customer and all tickets (and therefore all chats) associated with that customer are also contained in the same conversation. For **anonynous** customers, we only store a single ticket per conversation.

In essence, a conversation store *all* interactions between a customer and the system.

Examples of events: automated messages (greetings, goodbyes, off-hours, etc.), IA-generated messages (ex. from a RAG), automatic transfer to an agent, manual transfer between agents, setting a chat to stand by, tagging, etc.

## Exchanges and Queue Strategy

We are using RabbitMQ. To simplify every microservice, we are implementing a one-to-one correspondence between a queue and a message type. For example, the message `Open Ticket` will have its own queue, only messages of that type will be enqueue there and only there.

Initially, every microservice will publlish its messages in the default exchange and consume from the queues relevant to its functionality.
