/**
 * Example: https://github.com/zenvia/zenvia-sdk-node/blob/master/examples/sms-send-text-message.js
 */

import { Client, TextContent } from '@zenvia/sdk';

const client = new Client('YOUR_API_TOKEN');

const sms = client.getChannel('sms');

const content = new TextContent('Some text message');

sms.sendMessage('sender-identifier', 'recipient-identifier', content)
.then((response) => {
  console.log('Response:', response);
})
.catch((error) => {
  console.log('Error:', error);
});
