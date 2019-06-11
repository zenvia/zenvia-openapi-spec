const { post } = require('request-promise');

post({
  uri: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
  body: {
    from: 'dbbe8448-87f3-11e9-9aa0-9fad6fe01493',
    to: '5511999999999',
    contents: [{
      type: 'text',
      text: 'Hello world!'
    }]
  },
  auth: {
    bearer: process.env.JWT
  },
  json: true
})
.then((message) => {
  console.log(`Message created: ${JSON.stringify(message)}`);
})
.catch((error) => {
  console.error(error);
});
