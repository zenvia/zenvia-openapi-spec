/**
 * Example: https://github.com/zenvia/zenvia-sdk-node/blob/master/examples/facebook-send-text-message.js
 */

import { Client, TextContent } from '@zenvia/sdk';

const client = new Client('YOUR_API_TOKEN');

const facebook = client.getChannel('facebook');

const content = new TextContent('Some text message');

facebook.sendMessage('sender-identifier', 'recipient-identifier', content)
.then((response) => {
  console.log('Response:', response);
})
.catch((error) => {
  console.log('Error:', error);
});
