---
id: complete-conversation-via-whatsapp
name: Identified Customer via WhatsApp
version: 0.0.1
summary: Business flow for handling a new message through WhatsApp Business API where the customer has his/her phone number registered.
steps:
    - id: "customer_sends_message_via_whatsapp"
      title: Customer sends message via WhatsApp
      next_step: 
        id: "ms-whatsapp"
        label: "Meta informs of a new message"

    - id: "ms-whatsapp"
      title: ms-whatsapp
      service:
        id: "ms-whatsapp"
        version: 0.0.1
      next_step:
        id: "whatsapp-business-text-message-received"

    - id: "whatsapp-business-text-message-received"
      title: WhatsApp Business API Text Message Received
      message:
        id: "whatsapp-business-text-message-received"
        version: 0.0.1
      next_step:
        id: "ms-gateway"
        
    - id: "ms-gateway"
      title: "ms-gateway"
      service:
        id: "ms-gateway"
        version: 0.0.1
      next_step:
        id: "whatsapp-business-text-message-received-with-user-info"
        label: "Message with customer information"
      
    - id: "whatsapp-business-text-message-received-with-user-info"
      title: WhatsApp Business API Text Message With User Info Received
      message:
        id: "whatsapp-business-text-message-with-user-info-received"
        version: 0.0.1
      next_step:
        id: "ms-conv-store"

    - id: "ms-conv-store"
      title: "ms-conv-store"
      service:
        id: "ms-conv-store"
        version: 0.0.1
      next_steps:
        - id: "generate-ai-agent-answer-with-user-info"
          label: "1. Let AI Agent handle the conversation, initially."
        - id: "open-ticket"
          label: "2. Order the creation of a ticket because RAG asks for it"
        - id: "conversation-document"
          label: "6. Response with relevant conversation"
        - id: "send-whatsapp-business-text-message"
          label: "8. Commands a new text message via WhatsApp"

    - id: "generate-ai-agent-answer-with-user-info"
      title: Generate AI Agent Answer
      message:
        id: "generate-ai-agent-answer-with-user-info"
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
        label: "Suppose RAG sets create_ticket flag"

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
        id: "ms-agents"

    - id: "ms-agents"
      title: "ms-agents"
      service:
        id: "ms-agents"
        version: 0.0.1
      next_steps:
        - id: "ticket-opened"
          label: "3. Inform a new ticket has been created"
        - id: "agent-assigned"
          label: "4. Inform a new agent has been assigned"
        - id: "get-conversation"
          label: "5. Request relevant conversation"
        - id: "agent-answer-generated"
          label: "7. Send agent answer"
      
    - id: "ticket-opened"
      title: "Ticket Opened"
      message:
        id: "ticket-opened"
        version: 0.0.1
      next_step:
        id: "ms-conv-store"

    - id: "agent-assigned"
      title: "Agent Assigned"
      message:
        id: "agent-assigned"
        version: "0.0.1"
      next_step:
        id: "ms-conv-store"

    - id: "get-conversation"
      title: "Get Conversation"
      message:
        id: "get-conversation"
        version: 0.0.1
      next_step:
        id: "ms-conv-store"

    - id: "conversation-document"
      title: "Conversation Document"
      message:
        id: "conversation-document"
        version: 0.0.1
      next_step:
        id: "ms-agents"

    - id: "agent-answer-generated"
      title: "Agent Answer Generated"
      message:
        id: "agent-answer-generated"
        version: 0.0.1
      next_step:
        id: "ms-conv-store"
    
    - id: "send-whatsapp-business-text-message"
      title: "Send WhatsApp Business Text Message"
      message:
        id: "send-whatsapp-business-text-message"
        version: 0.0.1
      next_step:
        id: "ms-whatsapp"

---

## Complete Flow of a New Conversation via WhatsApp

1. Customer sends a WhatsApp message.
2. `ms-whatsapp` receives the new message and produces the `WhatsApp Business Text Message Received` event.
    1. TODO Add example.
3. `ms-gateway` consumes the event, verify if the WhatsApp number is registered to some customer.
    1. If it is, produces the `WhatsApp Business Text Message With User Info Received` event with customer information.
    2. TODO Add example
    3. If not, produces the `WhatsApp Business Text Message Received` event without customer information.
    4. TODO Add example.
4. `ms-conv-store` consumes `WhatsApp Business Text Message With User Info Received` and it does the following.
    1. If **the event contains info about a customer**,
        1. It appends the new message and updates the active channel to the corresponding conversation. Create a new conversation if necesary.
        2. If there is an open ticket, produce `Generate Agent Answer` (to `ms-agents`).
        3. If not, produce `Generate AI Agent Answer`.
    2. If not, creates a new conversation with the message and active channel and sends `Generate AI Agent Answer` to `ms-rag`.
    TODO Add example
5. Suppose there is not customer information nor an open ticket, then `ms-rag` consumes the `Generate AI Agent Answer` command and sends its answer encoded in a `AI Agent Answer Generated`.
6. `ms-conv-store` consumes the ai answer and checks the active channel. Sends `Send WhatsApp Business Text Message` to `ms-whatsapp` with the generated answer.

The previous flow descrives the first phase while every answer the systems outputs is generated via AI Agents. The following flow descrives the transition between an AI Agent to a (human) Agent.

1. `ms-conv-store` receives an `AI Agent Answer Generated` with a `open_ticket` flag set to true. Then it sends `Open Ticket` to `ms-agents`.
2. `ms-agents` will handle the command, start the initialization of a ticket and trigger a sequence of events (`Agent Assigned`, `Ticket Opened`, etc.) all of which will be logged in the conversation (at `ms-conv-store`).
3. Eventually, `ms-agents` sends the event `Agent Answer Generated` which contains the answer written by the human agent.
4. `ms-conv-store` handles everything analogous to an IA answer.

## Flow of feature

<NodeGraph/>
