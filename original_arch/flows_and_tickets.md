@startuml

queue "outgoing-messages" as outg
participant "ms-conv-store" as conv
queue "conversations-events" as convq
participant "ms-flows" as flows
participant "ms-agents" as agents

== New Flow Execution (Channel: WhatsApp Business) ==

conv -> convq: start_flow_execution
convq -> flows: start_flow_execution
flows -> convq: flow_execution_started
flows -> convq: flow_answer_generated
convq -> conv: flow_answer_generated
conv -> outg: send_whatsapp_business_message

== Flow Answering ==

conv -> convq: message_added
convq -> flows: message_added
flows -> convq: flow_answer_generated
convq -> conv: flow_answer_generated
conv -> outg: send_whatsapp_business_message

== New Ticket ==

flows -> convq: flow_execution_ended
convq -> conv: flow_execution_ended

alt Flow orders a new ticket

conv -> convq: open_ticket
note right: Prev messages included!
convq -> agents: open_ticket

agents -> convq: ticket_opened
agents -> convq: agent_answer_generated
convq -> conv: agent_answer_generated
conv -> outg: send_whatsapp_business_message

else Flow do not order a new ticket

note across: Do nothing.

end

@enduml
