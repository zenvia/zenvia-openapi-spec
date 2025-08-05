Import batches of order-related data from platforms and databases external to ZENVIA Customer Cloud. This imported data will support platform features like RFV Calculation and other features that are used alongside other APIs like

- [Product Batches API](#tag/Product-Batches)
- [Order Batches API](#tag/Order-Batches)
- [Invoice Batches API](#tag/Invoice-Batches)

## Building the CSV File

To use the Order Batches API, you need to create a CSV file based on a predefined structure and in compliance with data types and their respective validations. You can read more about this standard below:

### CSV File Structure

The CSV file must follow the structure below:

- The first line must contain the table header.
- The columns must be in the predefined order, listed below.
- Columns must be separated by a semicolon (`;`).

The predefined order must be:

- **`externalPlatform`**: ERP identifier
  - **Required**: `true`
  - **Type**: `string`
  - **Format**: `OMIE`, `BLING`, `TINY`, `MICROVIX`, `WBUY`, `OTHER`

- **`externalId`**: Order ID on external platform
  - **Required**: `true`
  - **Type**: `string`
  - **Max Size**: `255`

- **`invoiceExternalId`**: External ID of the invoice
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `500`

- **`customerExternalId`**: Customer ID on external platform
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `255`

- **`orderNumber`**: Order number
  - **Required**: `true`
  - **Type**: `string`
  - **Max Size**: `255`

- **`orderTimestamp`**: Order creation timestamp
  - **Required**: `true`
  - **Type**: `string`
  - **Format**: `YYYY-MM-DD HH:MM:SS`

- **`totalAmount`**: Total amount of the order
  - **Required**: `true`
  - **Type**: `string` || `number`
  - **Max Size**: `30`
  - **Format**:
    - Must accept only positive numbers;
    - Numbers should not have thousands separators;
    - Must accept integers and decimals with `,` (comma) separator;
    - Must not accept decimal separator of `.`;
    - Example of valid formats: `15236,15` | `458`
  - **Precision**: `19,2` in case of number.

- **`legalCode`**: Legal code (e.g., CNPJ, CPF)
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `500`

- **`legalName`**: Legal name of the customer
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `500`

- **`primaryPhone`**: Customer's primary phone number
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `15`
  - **Format**:
    - DDD is mandatory;
    - Must be a valid DDD in Brazil (BR);
    - Between 8 and 9 digits (counting only the phone number);
    - If checks pass, add `+55`;
    - Example: `+5551987659650`

- **`email`**: Customer's email
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `255`
  - **Format**:
    - Must contain `@`;
    - No special characters except for `_`, `.`, `@`, `-`;
    - Example: `isaachermel@zenvia.com`

- **`orderStatus`**: Order status
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`

- **`items`**: Order items
  - **Item**:
    - The item is included within the order.
    - **`productExternalId`**: Product ID on external platform
      - **Required**: `false`
      - **Type**: `string`
      - **Max Size**: `500`
    - **`sku`**: SKU (Stock Keeping Unit)
      - **Required**: `false`
      - **Type**: `string`
      - **Max Size**: `255`
    - **`ean`**: EAN (European Article Number)
      - **Required**: `false`
      - **Type**: `string`
      - **Max Size**: `500`
    - **`name`**: Product name
      - **Required**: `true`
      - **Type**: `string`
      - **Min Size**: `1`
      - **Max Size**: `500`
    - **`quantity`**: Item quantity
      - **Required**: `true`
      - **Type**: `string` || `number`
      - **Format**: double
      - Must accept only integers or decimals, without thousands separators and with comma (`,`) as decimal separator.
      - **Max Size**: `30`
    - **`measurementUnit`**: Product unit of measurement
      - **Required**: `false`
      - **Type**: `string`
      - **Max Size**: `10`
      - Only accept the following formats: [Tabela_Unidades_de_Medida_Comercial](https://docs.google.com/spreadsheets/d/1L7GsmNp9Ft-DdGL9X3KcU7YcqZHvnWvDT6WU3f-xY4k/edit?gid=1500856119#gid=1500856119)
    - **`priceUnit`**: Unit price of the item
      - **Required**: `true`
      - **Type**: `string` || `number`
      - **Max Size**: `30`
      - **Format**:
        - Must accept only positive numbers;
        - Numbers should not have thousands separators;
        - Must accept integers and decimals with `,` (comma) separator;
        - Must not accept decimal separator of `.`;
        - Example of valid formats: `15236,15` | `458`
      - **Precision**: `19,2` in case of number.
    - **`currency`**: Currency
      - **Required**: `true`
      - **Type**: `string`
      - **Min Size**: `1`
      - **Max Size**: `3`
      - Only accept standard [ISO Code](https://www.iban.com/currency-codes) values (accept uppercase and lowercase characters and transform them into uppercase)

### Batch lifecycle

The order batch will have the following lifecycle:

1. The batch is imported and saved on our database.
2. The batch is processed in our infrastructure.
3. After this, the batch will have two statuses:

- `SUCCESS`: The batch process was successful, and the data was sent to the Order Manager, and feedback was saved.
- `FAILED`: The batch process was unsuccessful, and the data was not sent to the Order Manager, and feedback was saved.

4. You can access the feedback through an endpoint that you'll read further in this documentation.

All CSV files stored in our infrastructure (sended CSV and feedback CSV) have an expiration date of 10 days, counting by the day of it's creation.
