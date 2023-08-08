export function contacts() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'contacts',
      contacts: [{
        addresses: [{
          street: 'Av. Paulista, 2300',
          city: 'São Paulo',
          state: 'São Paulo',
          zip: '01310-300',
          county: 'Brazil',
          countryCode: 'BR',
          type: 'WORK',
        }],
        birthday: '',
        contactImage: '',
        emails: [{
          email: 'jhon@zenvia.com',
          type: 'WORK',
        }],
        name: {
          formattedName: 'Jhon Zenvia',
          firstName: 'Jhon',
          lastName: 'Zenvia',
          middleName: '',
          suffix: '',
          prefix: '',
        },
        org: {
          company: 'Zenvia',
          department: 'Sales',
          title: 'Sales',
        },
        phones: [{
          phone: '08006464777',
          type: 'WORK',
          waId: '132465',
        }],
        urls: [{
          url: 'https://www.zenvia.com/',
          type: 'WORK',
        }],
      }],
    }],
    conversation:{
      solution: 'conversion',
    },
  };
}
