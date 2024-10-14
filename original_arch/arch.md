# Microservices

## ms-gw-user

### Consumes

* (event) whatsapp_business_message_received

### Produces

* (event) message_received
  * channel: "whatsapp-business" | "chatbot" | "mobile"
  * channel_details: {
    sender_number: string
    receiver_number: string
  } | {
    session_id: string
  } | {
    ... something to identify an user via mobile app ...
  }
  * source_id: string
  * body
  * user_id: string (if any)
  * user_details: object (if any)

## ms-whatsapp

### Consumes

* (command) send_whatsapp_business_message

### Produces

* (event) whatsapp_business_message_received
  * type = "v0.wa.message_received"
  * timestamp: datetime
  * sender: string
  * receiver: string
  * body: string

* (event) whatsapp_business_message_delivered
  * type = "v0.wa.message_delivered"
  * timestamp: datetime
  * message_id: string

## ms-conv-store

### Consumes

* (event) whatsapp_business_message_delivered
* (event) message_received
* (event) flow_answer_generated
* (event) agent_answer_generated
* (event) flow_execution_ended
* (event) ticket_closed

### Produces

* (command) send_whatsapp_business_message
  * type = "v0.conv.send_whatsapp_business_message"
  * sender: string
  * receiver: string
  * body: string

* (command) start_flow_execution
  * user_data: object (if any)
  * initial_message: string

* (event) message_added
  * user_data: object (if any)
  * body: string
  * channel: "whatsapp" | "flow" | "agent" | ...

* (command) open_ticket
  * user_data: object (if any)
  * conversation_id
  * messages: object[] TODO Replace with ConversationDocument

## ms-flows

### Consumes

* (command) start_flow_execution
* (event) message_added

### Produces

* (event) flow_execution_started
  * flow_execution_id
  * type: "rigid" | "agent_dispatch" (?)
  * conversation_id

* (event) flow_execution_ended
  * flow_execution_id
  * type: (see flow_execution_started)
  * conversation_id
  * is_ticket_required: "true" | "false"

* (event) flow_answer_generated
  * flow_execution_id
  * flow_type: (see flow_execution_started)
  * conversation_id
  * body

## ms-agents

### Consumes

* (command) open_ticket
* (event) message_added
* (event) flow_execution_ended

### Produces

* (event) ticket_opened
  * ticket_id
  * conversation_id

* (event) ticket_closed
  * ticket_id
  * conversation_id

* (event) agent_answer_generated
  * agent_id
  * agent_details
  * ticket_id
  * conversation_id
  * body
