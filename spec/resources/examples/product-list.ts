export function productList() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'product_list',
      header: 'Message Header',
      body: 'Your message body text here',
      footer: 'Your message footer text here',
      catalogId: 'CATALOG_ID',
      sections: [
        {
          title: 'Section Title',
          productItems: [
            {
              productId: 'product-SKU-in-catalog',
            },
            {
              productId: 'product-SKU-in-catalog',
            },
          ],
        },
      ],
    }],
    conversation:{
      solution: 'conversion',
    },
  };
}
