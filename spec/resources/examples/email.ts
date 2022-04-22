export function email() {
  return {
    from: 'sender@zenvia.com',
    to: 'recipient@zenvia.com',
    representative: {
      name: 'Sender Name',
    },
    contents: [{
      type: 'email',
      subject: 'Re: Ticket 12345',
      html: '<b>HTML content</b>',
      text: 'Plain text content',
      attachments: [
        { fileUrl: 'https://zenvia.com/example1.pdf' },
        { fileUrl: 'https://zenvia.com/example2.png' },
      ],
      cc: ['cc1@zenvia.com', 'cc2@zenvia.com'],
      bcc: ['bcc1@zenvia.com', 'bcc2@zenvia.com'],
    }],
  };
}