export function tts_transferTo() {
  return {
    from: '12345a123a1234a1a2a123a1234ab1ab',
    to: '55108888888888',
    contents: [{
      type: 'call',
      audio: [{
        type: 'tts',
        text: 'Hi Zenvia!',
        voiceStyle: 'br-Vitoria',
        awaitRecipientAnswer: true,
      }],
    }],
    transferTo: '5511999999999',
    recordAudio: true,
    hangUpOnVoiceMail: true,
  };
}
