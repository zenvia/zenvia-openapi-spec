export function carousel() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'carousel',
      cardWidth: 'MEDIUM',
      cards: [{
        title: 'Card from Zenvia',
        text: 'This is our products',
        media: {
          url: 'https://zenvia.com/zenvia-office.png',
          disposition: 'ON_THE_TOP_MEDIUM_HEIGHT',
          caption: 'Our amazing office!',
        },
        buttons: [{
          type: 'link',
          text: 'Site',
          url: 'https://www.zenvia.com/',
        }],
        quickReplyButtons: [{
          type: 'text',
          text: 'Click here',
          payload: 'success',
        }],
      }],
    }],
    conversation:{
      solution: 'conversion',
    },
  };
}
