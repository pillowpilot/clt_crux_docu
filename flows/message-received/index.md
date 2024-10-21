---
id: message-received
name: Flow for New WhatsApp Message Received
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
        id: "ms-conv-store"
        
    - id: "ms-conv-store"
      title: "ms-conv-store"
      service:
        id: "ms-conv-store"
        version: 0.0.1
      next_step:
        id: "message-received"
      
    - id: "message-received"
      title: Message Received
      message:
        id: "message-received"
        version: 0.0.1
      
---

### Flow of feature

<NodeGraph/>
