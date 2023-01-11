export function telegramExamples(example) {
  return {
    ...example,
    from: 'YourBot',
    to: 'tg-chat-id',
  };
}
