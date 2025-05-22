export function orderDetailsTemplate(){
  return {
    orderDetailsParameters: {
      referenceId: 'OPTIONAL_UNIQUE_REFERENCE_ID_123',
      type: 'digital_goods',
      paymentSettings: [
        {
          type: 'boleto',
          digitableLine: '03399026944140000002628346101018898510000008848',
        },
        {
          type: 'pix_dynamic_code',
          code: '00020101021226700014br.gov.bcb.pix2548pix.example.com',
          merchantName: 'Zenvia Brazil',
          key: '01234567890',
          keyType: 'CPF',
        },
      ],
      totalAmount: 500.00,
      order: {
        items: [
          {
            productId: '1234567890',
            name: 'Zenvia Brazil',
            amount: 500.00,
            quantity: 1,
          },
        ],
        tax: {
          value: 0,
        },
        subtotal: 500.00,
      },
    },
  };
}
