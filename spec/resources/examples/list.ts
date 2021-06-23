export function list() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'list',
      header: 'Message Header',
      body: 'Your message body text here',
      footer: 'Your message footer text here',
      button: 'Button Text',
      sections: [
        {
          title: 'Section Title',
          rows: [
            {
              id: 'row1',
              title: 'Item One',
              description: 'Item one description.',
            },
            {
              id: 'row2',
              title: 'Item Two',
              description: 'Item two description.',
            },
            {
              id: 'row3',
              title: 'Item Three',
              description: 'Item three description.',
            },
          ]
        },
      ]
    }],
  };
}
