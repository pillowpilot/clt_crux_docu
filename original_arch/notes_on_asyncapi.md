# Notes on AsyncAPI and CloudEvents

## AsyncAPI

### Anatomy

* Info: metadata and documentation about a particular async api.
* Servers: list of brokers with binding details (URLs, auth, etc.)
* Channel:
  * Channel Item: destination for publishing/consuming (topic, **queue**, etc.)
    * Operation: **Publish** or **Consume** (or other)
        * Summary, description, tags, etc.
        * Message: content-type and structure of message headers and payload. May contain examples.  
