export function flow() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
        type: 'flow',
        header: 'Text header content',
        body: 'Text body content',
        footer: 'Text footer content',
        flow: {
            mode: 'draft',
            token: 'TOKEN_FLOW',
            id: 'TOKEN_ID',
            buttonText: 'Click here!',
            action: {
            type: 'navigate',
            screen: 'SCREEN_ID',
            data: {
                property1: '2022-06-13',
                property2: '2022-06-13',
                },
            },
        },
    }],
    };
}



