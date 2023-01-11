export function emailExamples(example) {
  return {
    ...example,
    from: 'sac@brand.domain',
    to: 'user@zenvia.com',
    representative: {
      name: 'Sender Name',
    },
  };
}
