export function notificationOptIn() {
  return {
    from: "5510999999999",
    to: "55108888888888",
    contents: [{
      mediaUrl: 'https://zenvia.br/zenvia-office.png',
      title: 'Weekly Amazing Deals',
      frequency: 'WEEKLY',
      reOptIn: 'ENABLED',
      payload: 'weekly-deals',
      timezone: 'America/Sao_Paulo'
    }]
  }
}