Conversations lets external integrators manage NCA (Novo Conceito de Atendimento) sales conversations programmatically: creating conversations, listing them, sending outbound messages and internal notes, archiving and transferring them to another user or group.

This surface is exclusively for organizations running on NCA. Legado/ZCC accounts continue to be served by the Sales API (`sales.zenvia.com`).

## Notes vs. messages

A note is not a distinct entity — it is a message sent with `direction: INTERNAL`, never delivered to the contact. Use `POST /conversations/{conversationId}/notes` as the ergonomic route for it; it is translated internally to the same message contract used by `POST /conversations/{conversationId}/messages`.

## Sessions

Sending a message on a conversation without an active messaging session with the contact fails with a `SESSION_REQUIRED` error. The API does not silently reopen a session.

## Actor authorization

Actions that depend on state or permission (sending a message, archiving, transferring) validate that the acting agent has access to the conversation (group membership or assignment). A caller without access is rejected with an authorization error.
