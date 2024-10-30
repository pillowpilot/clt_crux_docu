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

### Flow of feature

<NodeGraph/>
