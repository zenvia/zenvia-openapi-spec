Import Product Batches, the data will be added to the **Product Catalog Database** in ZENVIA Customer Cloud. Once imported, these products can be used to trigger campaigns, personalize offers, and serve as a data source for insights and reports provided by the system. They will also help integrate with other platform functionalities.

- [Contact Batches API](#tag/Contact-Batches)
- [Order Batches API](#tag/Order-Batches)
- [Invoice Batches API](#tag/Invoice-Batches)

## Building the CSV File

To use the Product Batches API, you need to create a CSV file based on a predefined structure and in compliance with data types and their respective validations. You can read more about this standard below:

### CSV File Structure

The CSV file must follow the structure below:

- The first line must contain the table header.
- The columns must be in the predefined order, listed below.
- Columns must be separated by a semicolon (`;`).

The predefined order must be:

- **`externalPlatform`**: ERP identifier
  - **Required**: `true`
  - **Type**: `string`
  - **Enum**: `OMIE`, `BLING`, `TINY`, `MICROVIX`, `WBUY`, `OTHER`

- **`externalId`**: Product ID on external platform
  - **Required**: `true`
  - **Type**: `string`
  - **Max Size**: `255`

- **`name`**: Product name
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`sku`**: SKU (Stock Keeping Unit) on product
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`

- **`ean`**: EAN (European Article Number) on product
  - **Required**: `false`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`brand`**: Product brand
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`description`**: Detailed Product Description
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`measurementUnit`**: Product unit of measurement
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`
  - Only accept the following formats: [Tabela_Unidades_de_Medida_Comercial](https://docs.google.com/spreadsheets/d/1L7GsmNp9Ft-DdGL9X3KcU7YcqZHvnWvDT6WU3f-xY4k/edit?gid=1500856119#gid=1500856119)

- **`priceUnit`**: Unit price of the product
  - **Required**: `true`
  - **Type**: `string` || `number`
  - **Max Size**: `30`
  - **Format**:
    - Must accept only positive numbers;
    - Numbers should not have thousands separators;
    - Must accept integers and decimals with `,` (comma) separator;
    - Must not accept decimal separator of `.`;
    - Example of valid formats: `15236,15` | `458`

- **`currency`**: Currency
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `3`
  - Only accept standard [ISO Code](https://www.iban.com/currency-codes) values (accept uppercase and lowercase characters and transform them into uppercase)

- **`ncm`**: NCM (Mercosur Common Nomenclature)
  - **Required**: `false`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`

#### CSV Lifecycle

All CSV files stored in our infrastructure (imported CSVs and feedback CSVs) have and expiration date of 10 days.

This 10 days will start couting by the day of it's creation.

#### The Feedback CSV

After your contact batch is processed, a CSV file will be generated containing feedback on the processing of the batch data.

You can access and read this file. Simply retrieve its URL through one of the available GET routes in our API; the URL will be in the feedbackUrl property.

This feedback file is the same as the file you sent to us, but with a few changes:

Three new fields are created in it:

- `status`: Indicates whether that row was processed correctly or not. It can have the values `SUCCESS` or `FAILED`.
- `id`: If the row was processed correctly, it will return the ID of the import created in the Contact Manager.
- `errorMessages`: Will display the errors that prevented the row in question from being validated.

The fields will be updated as follows:

- Any value that does not adhere to the field's validation rules will be transformed into a `''` value in the feedback file, regardless of whether it is a mandatory field or not.
- If a value in a mandatory field does not adhere to the validation rules, the error message must be included in the `errorMessages` field, and the status will be `FAILED`.

### Batch lifecycle

The contact batch will have the following lifecycle:

1. The batch is imported and saved on our database
2. The batch is processed in our infrastructure
3. After this, the batch can have one of these two statuses:

#### `SUCCESS`

The processment of the batch was successful. The data was send to the Contact Manager Database.

#### `FAILED`

The processment of the batch was unsuccessful. The data was not send to the Contact Manager Database.

On both cenarios, a feedback will be saved. You can check him using the GET requests to check it's URL.