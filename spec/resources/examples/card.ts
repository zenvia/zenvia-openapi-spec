export function card() {
  return {
    from: '5511999999999',
    to: '55118888888888',
    contents: [{
      type: 'card',
      label: 'Card from Zenvia',
      text: 'This is our products',
      media: {
        url: 'http://fooooo.br/zenvia.png',
        disposition: 'ON_THE_TOP_MEDIUM_HEIGHT',
        caption: 'An amazing office!',
      },
      buttons: [{
        type: 'web_url',
        text: 'Site',
        link: 'https://www.zenvia.com/',
      }],
      quickReplyButtons: [{
        type: 'postback',
        text: 'Click here',
        payload: 'success',
      }],
    }],
  };
}
