export function replyableText() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'replyable_text',
      text: 'Hi Zenvia!',
      quickReplyButtons: [{
        type: 'text',
        text: 'Click here',
        payload: 'success',
      }],
    }],
    conversation:{
      solution: 'livechat',
    },
  };
}
