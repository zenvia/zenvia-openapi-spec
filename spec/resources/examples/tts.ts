export function tts() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'tts',
      text: 'Hi Zenvia!',
      voiceStyle: "br-Vitoria",
      awaitRecipientAnswer: true,
    }],
  };
}