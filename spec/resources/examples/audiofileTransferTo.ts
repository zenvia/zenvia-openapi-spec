export function audiofileTransferTo() {
  return {
    from: '12345a123a1234a1a2a123a1234ab1ab',
    to: '55108888888888',
    contents: [{
      type: 'call',
      audio: [{
        type: 'file',
        fileUrl: 'http://fooooo.bar/audio.mp3',
      }],
    }],
    transferTo: '5511999999999',
    recordAudio: true,
    hangUpOnVoiceMail: true,
  };
}
