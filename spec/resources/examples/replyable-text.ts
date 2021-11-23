export function textQuickReply() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'text',
      text: 'Hi Zenvia!',
      quickReplyButtons: [{
        type: 'text',
        text: 'Click here',
        payload: 'success',
      }],
    }],
  };
}
