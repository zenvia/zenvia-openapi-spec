export function product() {
  return {
    from: '5510999999999',
    to: '55108888888888',
    contents: [{
      type: 'product',
      body: 'Your message body text here',
      footer: 'Your message footer text here',
      catalogId: 'CATALOG_ID',
      productId: 'product-SKU-in-catalog',
    }],
    conversation:{
      solution: 'conversion',
    },
  };
}
