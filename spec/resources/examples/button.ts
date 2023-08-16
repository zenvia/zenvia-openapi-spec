export function button() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'button',
      header: {
        type: 'file',
        fileUrl: 'https://zenvia.com/zenvia-team.png',
      },
      body: 'Your message body text here',
      footer: 'Your message footer text here',
      buttons: [
        {
          id: 'btn1',
          title: 'Button One',
        },
        {
          id: 'btn2',
          title: 'Button Two',
        },
      ],
    }],
    conversation:{
      solution: 'conversion',
    },
  };
}
