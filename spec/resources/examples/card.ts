export const card = {
  from: '5511999999999',
  to: '55118888888888',
  contents: [{
    type: 'card',
    label: 'Card from Zenvia',
    text: 'This is our products',
    orientation: 'VERTICAL',
    imageAlignment: 'LEFT',
    imageUrl: 'http://fooooo.br/zenvia.png',
    imageDescription: 'Zenvia',
    height: 'SHORT',
    buttons: [{
      type: 'web_url',
      link: 'https://www.zenvia.com/',
    }],
    quickReplyButtons: [{
      type: 'postback',
      text: 'Click here',
      payload: 'success',
    }],
  }],
};
