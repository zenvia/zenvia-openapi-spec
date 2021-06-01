To access  the voice channel, you need to create your account here:
https://voice-app.zenvia.com/painel/signup.php. 

After creating  the account, you can get your Access Token (SenderId) on your voice panel homepage: https://voice-app.zenvia.com/painel/



Voice types for TTS (Text to Speech)
List of available voices :
* br-Camila
* br-Vitoria
* br-Ricardo
* en-Joey
* en-Joanna
* fre-Celine
* fre-Mathieu
* ger-Vicki
* ger-Hans
* ita-Carla
* ita-Giorgio
* jap-Mizuki
* pol-Jan
* rus-Tatyana
* rus-Maxim
* esp-Conchita
* esp-Enrique

## Limitations

The Voice API has some limitations:

* To send an audio file you wil have to inform the number destination and a public URL which contains the audio file.

* Some additionall options are allowed such as: await for an answer, record the audio of the calling or  

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| audio | audio/mp3<br>audio/wav | 5&nbsp;MB |

## Voice sender and recipient

When you send some voice message for one contact using Voice channel:

* Recipient: is the phone number of the contact
* Sender: is the Access Token got on the voice panel homepage: https://voice-app.zenvia.com/painel as mentioned above

When you receive a voice message from one contact, the sender and recipient are inverted:

* Recipient: is the Access Token got on the voice panel homepage: https://voice-app.zenvia.com/painel as mentioned above
* Sender: is the phone number of the contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of the message object.