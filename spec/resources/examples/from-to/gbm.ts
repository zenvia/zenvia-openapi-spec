export function gbmExamples(example) {
  return {
    ...example,
    from: 'gbm-agent-id',
    to: 'gbm-contact-id',
    representative: {
      type: 'HUMAN',
      name: 'Agent Name',
      avatar: 'https://zenvia.com/favicon.ico',
    },
  };
}
