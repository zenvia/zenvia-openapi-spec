export function card() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'card',
      label: 'Card from Zenvia',
      text: 'This is our products',
      media: {
        url: 'https://zenvia.br/zenvia-office.png',
        disposition: 'ON_THE_TOP_MEDIUM_HEIGHT',
        caption: 'Our amazing office!',
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
