export function email() {
  return {
    from: 'sac@brand.domain',
    to: 'user@zenvia.com',
    contents: [
      {
        type: 'email',
        subject: 'Re: Ticket 12345',
        html: '<b>Hi!</b><br><img src="cid:example2.jpeg">',
        attachments: [
          {
            fileUrl: 'https://zenvia.com/example1.pdf',
          },
          {
            fileUrl: 'https://zenvia.com/example2.jpg',
            fileName: 'example2.jpeg',
          },
        ],
        cc: [
          {
            email: 'cc1@zenvia.com',
          },
          {
            email: 'cc2@zenvia.com',
            name: 'CC2',
          },
        ],
        bcc: [
          {
            email: 'bcc1@zenvia.com',
          },
          {
            email: 'bcc2@zenvia.com',
            name: 'BCC2',
          },
        ],
        replyTo: {
          email: 'reply-to@zenvia.com',
          name: 'Service Care',
        },
      },
    ],
  };
}
