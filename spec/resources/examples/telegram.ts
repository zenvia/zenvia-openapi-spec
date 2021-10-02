export function telegramText() {
  return {
    from: 'f813dc06-88b9-11eb-a670-b3bfa39c9470',
    to: 'string',
    contents: [{
      type: 'text',
      text: 'Hi Zenvia!',
    }],
  };
}

export function telegramFile() {
  return {
    from: 'f813dc06-88b9-11eb-a670-b3bfa39c9470',
    to: 'string',
    contents: [{
      type: 'file',
      fileUrl: 'https://zenvia.br/zenvia-team.png',
      fileMimeType: 'image/png',
      fileCaption: 'Our pic :)',
      fileName: 'team.png',
    }],
  };
}
