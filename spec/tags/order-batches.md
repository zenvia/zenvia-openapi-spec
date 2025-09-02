Import batches of order-related data from platforms and databases external to ZENVIA Customer Cloud. This imported data will help power features like **RFV Calculation**, alongside other features that are used alongside other APIs like:

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
  - **Enum**: `OMIE`, `BLING`, `TINY`, `MICROVIX`, `WBUY`, `OTHER`

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
  = **Min Size**: `1`
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

- **`primaryPhone`** - Customer's main phone number
  - **Required**: `false`
  - **Type**: `string`
  - **Format**: validate if there will be more than one contact number
  - **Requirements**:
    - **DDD** - must be a valid Brazilian area code
    - **max_size**: `9` (counting only the phone number)
    - **min_size**: `8` (counting only the phone number)
    - If the above requirements are met, add DDI - add `55` to the phones.
    - Parentheses and hyphens will be accepted and replaced with an empty string
    - Other special characters will not be accepted
    - Letters will not be accepted

- **`email`**: Contact's email(s)
  - **Required**: `true` if `mobile` is not provided
  - **Type**: `list`
  - **Format**: `[youremail1@domain.com, youremail2@domain.com, ..., youremailn@domain.com]`
  - **Requirements**:
    - Existing domain;
    - Spaces will be replaced by an empty string (→ change to data mapping);
    - Uppercase characters will be replaced by lowercase (→ change to data mapping);
    - Must start with at least one letter or number;
    - No accents allowed;
    - No special characters except for `_`, `.`, `@`, `-`;
    - Must contain `@`;
    - Example Regex: `EMAIL_PATTERN = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')`

- **`orderStatus`**: Order status
  - **Required**: `true`
  - **Type**: `string`
  - **Enum**: `WAITING_PAYMENT`,
  `PAYMENT_ANALYSIS`,
  `PAYMENT_CONFIRMED`,
  `ORDER_EXPEDITING`,
  `ORDER_SHIPPED`,
  `ORDER_CANCELED`,
  `ORDER_FINISHED`,
  `PAYMENT_DENIED`,
  `ORDER_AVAILABLE`,
  `ORDER_RETURNED`,
  `ORDER_REVIEW`,
  `INVOICE_ISSUED`,
  `ORDER_PREPARING`,
  `RECEIPT_ISSUED`,
  `ON_ROUTE`,
  `PICKUP_AVAILABLE`,
  `DELIVERED`

- **`items`**: Order items
  - **Item**:
    - The item is included within the order.
    - **Multiple items per order**: Item fields can contain multiple values separated by commas to represent various products in a single order.
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
    - **`measurementUnit`**: Item unit of measurement
      - **Required**: `true`
      - **Type**: `string`
      - Only accept the following formats: [Tabela Unidades_de_Medida_Comercial](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=Q6Iyvm6qKsc=)
      - Accepts uppercase and lowercase
    - `priceUnit` - Unit price
      - **Required**: `true`
      - **Type**: `string or number`
        - Maintain decimal precision, do not round
      - **Max Size**: `30` characters
      - **Format**:
        - Must only accept positive numbers;
        - Numbers should not have a thousand separator;
        - Must accept integers and decimals with `,` as a separator;
        - Must not accept `.` as a decimal separator;
        - Accepts a maximum of two decimal places;
        - **Example of valid formats**: `15236,15` | `458`
      - **Precision**: `19,2` in case of number.
    - **`currency`**: Currency
      - **Required**: `true`
      - **Type**: `string`
      - Only accept standard [ISO Code](https://www.iban.com/currency-codes) values (accept uppercase and lowercase characters and transform them into uppercase)

#### Working with multiple items

To include multiple products in a single order, use the comma-separated list format in each item-related field. For example:

- `productExternalId`: `PROD001, PROD002, PROD003`
- `name`: `Product A, Product B, Product C`
- `quantity`: `2, 1, 5`

If it's a numeric field, you must make sure that there is space between the numbers, for example: `2, 1`. This happens because for numeric fields the separator is the space, not the usual comma.

The API will process these values as an ordered list, where the first value of each field corresponds to the first item, the second value to the second item, and so on.

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

`SUCCESS` - The processment of the batch was successful. The data was send to the Contact Manager Database.

`FAILED` - The processment of the batch was unsuccessful. The data was not send to the Contact Manager Database.

On both cenarios, a feedback will be saved. You can check him using the GET requests to check it's URL.
