@startuml

participant "ms-whatsapp" as wa
queue "message-enrichment" as enrich
participant "ms-gw-users" as users
queue "incoming-messages" as inco
participant "ms-conv-store" as conv
queue "outgoing-messages" as outg

== Incoming Message ==

wa -> enrich: whatsapp_business_message_received
enrich -> users: whatsapp_business_message_received
users -> inco: message_received
inco -> conv: message_received

== Outgoing Message == 


conv -> outg: send_whatsapp_business_message
outg -> wa: send_whatsapp_business_message

@enduml