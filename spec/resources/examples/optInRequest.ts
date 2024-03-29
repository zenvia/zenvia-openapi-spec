export function optInRequest() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'optin_request',
      mediaUrl: 'https://zenvia.com/zenvia-office.png',
      title: 'Weekly Amazing Deals',
      frequency: 'WEEKLY',
      reOptIn: 'ENABLED',
      payload: 'weekly-deals',
      timezone: 'America/Sao_Paulo',
    }],
  };
}
