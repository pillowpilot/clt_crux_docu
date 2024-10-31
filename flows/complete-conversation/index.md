---
id: complete-conversation
name: Complete Conversation
version: 0.0.1
summary: Business flow for handling a new message through WhatsApp Business API
steps:
    - id: "customer_sends_message_via_whatsapp"
      title: Customer sends message via WhatsApp
      next_step: 
        id: "ms-whatsapp"

    - id: "ms-whatsapp"
      title: ms-whatsapp
      service:
        id: "ms-whatsapp"
        version: 0.0.1
      next_step:
        id: "whatsapp-business-message-received"

    - id: "whatsapp-business-message-received"
      title: WhatsApp Business API Message Received
      message:
        id: "whatsapp-business-message-received"
        version: 0.0.1
      next_step:
        id: "ms-gateway"
        
    - id: "ms-gateway"
      title: "ms-gateway"
      service:
        id: "ms-gateway"
        version: 0.0.1
      next_step:
        id: "message-received"
      
    - id: "message-received"
      title: Message Received
      message:
        id: "message-received"
        version: 0.0.1
      next_step:
        id: "ms-conv-store"

    - id: "ms-conv-store"
      title: "ms-conv-store"
      service:
        id: "ms-conv-store"
        version: 0.0.1
      next_steps:
        - id: "generate-ai-agent-answer"
          label: Let AI Agent handle the conversation
        - id: "open-ticket"
          label: Order the creation of a ticket

    - id: "generate-ai-agent-answer"
      title: Generate AI Agent Answer
      message:
        id: "generate-ai-agent-answer"
        version: 0.0.1
      next_step:
        id: "ms-rag"
      
    - id: "ms-rag"
      title: "ms-rag"
      service:
        id: "ms-rag"
        version: 0.0.1
      next_step:
        id: "ai-agent-answer-generated"

    - id: "ai-agent-answer-generated"
      title: AI Agent Answer Generated
      message:
        id: "ai-agent-answer-generated"
        version: 0.0.1
      next_step:
        id: "ms-conv-store"

    - id: "open-ticket"
      title: Open Ticket
      message:
        id: "open-ticket"
        version: 0.0.1
      next_step:
        id: "ms-agent"

    - id: "ms-agent"
      title: "ms-agent"
      service:
        id: "ms-agent"
        version: 0.0.1
      


---

## Complete Flow of a New Conversation via WhatsApp

1. Customer sends a WhatsApp message.
2. `ms-whatsapp` receives the new message and produces the `WhatsApp Business Message Received` event.
    1. TODO Add example.
3. `ms-gateway` consumes the event, verify if the WhatsApp number is registered to some customer.
    1. If it is, produces the `Message Received` event with customer information.
    2. TODO Add example
    3. If not, produces the `Message Received` event without customer information.
    4. TODO Add example.
4. `ms-conv-store` consumes `Message Received` and it does the following.
    1. If **the event contains info about a customer**,
        1. It appends the new message and updates the active channel to the corresponding conversation. Create a new conversation if necesary.
        2. If there is an open ticket, produce `Incomming Message Received` (to `ms-agent`).
        3. If not, produce `Generate AI Agent Answer`.
    2. If not, creates a new conversation with the message and active channel and sends `Generate AI Agent Answer` to `ms-rag`.
    TODO Add example
5. Suppose there is not customer information nor an open ticket, then `ms-rag` consumes the `Generate AI Agent Answer` command and sends its answer encoded in a `AI Agent Answer Generated`.
6. `ms-conv-store` consumes the ai answer and checks the active channel. Sends `Send WhatsApp Business Message` to `ms-whatsapp` with the generated answer.

The previous flow descrives the first phase while every answer the systems outputs is generated via AI Agents. The following flow descrives the transition between an AI Agent to a (human) Agent.

1. `ms-conv-store` receives an `AI Agent Answer Generated` with a `open_ticket` flag set to true. Then it sends `Open Ticket` to `ms-agent`.
2. `ms-agent` will handle the command, start the initialization of a ticket and trigger a sequence of events (`Agent Assigned`, `Ticket Opened`, etc.) all of which will be logged in the conversation (at `ms-conv-store`).
3. Eventually, `ms-agent` sends the event `Agent Answer Generated` which contains the answer written by the human agent.
4. `ms-conv-store` handles everything analogous to an IA answer.

## Flow of feature

<NodeGraph/>
