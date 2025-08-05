Import batches of invoice-related data from platforms and databases external to ZENVIA Customer Cloud. This imported data will support platform features like RFV Calculation and other features that are used alongside other APIs like:

- [Contact Batches API](#tag/Contact-Batches)
- [Product Batches API](#tag/Product-Batches)
- [Order Batches API](#tag/Order-Batches)

## Building the CSV File

To use the Invoice Batches API, you need to create a CSV file based on a predefined structure and in compliance with data types and their respective validations. You can read more about this standard below:

### CSV File Structure

The CSV file must follow the structure below:

- The first line must contain the table header.
- The columns must be in the predefined order, listed below.
- Columns must be separated by a semicolon (`;`).

The predefined order must be:

- `externalPlatform` - Source ERP identification
  - **required**: `true`
  - **type**: `string (uppercase and lowercase)`
  - **ENUM**: `(OMIE, BLING TINY, MICROVIX, WBUY, OTHER)`
- `externalId` - Internal code from the source system
  - **required**: `true`
  - **type**: `string`
  - **max**: `255`
- `customerExternalId` - Internal contact code in the source system
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `issueTimestamp` - Date and time of the fiscal note issuance
  - **required**: `true`
  - **type**: `string`
  - **format**: `YYYY-MM-DD HH:MM:SS`
- `invoiceKey` - Fiscal note key
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `invoiceNumber` - Fiscal note number
  - **required**: `true`
  - **type**: `string`
  - **max**: `500`
- `invoiceSerie` - Fiscal note series
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `orderNumber` - Related order number
  - **required**: `false`
  - **type**: `string`
  - **max**: `255`
- `orderExternalId` - Unique order ID
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `legalCode` - Issuing company's legal code
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `legalName` - Issuing company's legal name
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `primaryPhone` - Customer's main phone number
  - **required**: `false`
  - **type**: `string`
  - **format**: validate if there will be more than one contact number
  - **requirements**:
    - **DDD** - must be a valid Brazilian area code
    - **max_size**: `9` (counting only the phone number)
    - **min_size**: `8` (counting only the phone number)
    - If the above requirements are met, add DDI - add `55` to the phones.
    - Parentheses and hyphens will be accepted and replaced with an empty string
    - Other special characters will not be accepted
    - Letters will not be accepted
- `email` - Customer's email
  - **required**: `false`
  - **type**: `string`
  - **format**: `youremail1@domain.com, youremail2@domain.com, ..., youremailn@domain.com`
  - **requirements**:
    - Existing domain;
    - Spaces will be replaced by an empty string; → change to data mapping
    - Uppercase characters will be replaced by lowercase; → change to data mapping
    - Must start with at least one letter or number;
    - No accents;
    - No special characters except for `_`, `.`, `@`, `-`;
    - Must contain `@`;
    - **Example**: `EMAIL_PATTERN = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')`
- `totalAmount` - Total value of the fiscal note
  - **required**: `true`
  - **type**: `string or number`
    - Maintain decimal precision, do not round
  - **max**: `30` characters
  - **format**:
    - Must only accept positive numbers;
    - Numbers should not have a thousand separator;
    - Must accept integers and decimals with `,` as a separator;
    - Must not accept `.` as a decimal separator;
    - Accepts a maximum of two decimal places;
    - **Example of valid formats**: `15236,15` | `458`
- `productExternalId` - Product's source code
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `sku` - Product's SKU
  - **required**: `false`
  - **type**: `string`
  - **max**: `255`
- `ean` - Product's EAN code
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `name` - Product's name/description
  - **required**: `true`
  - **type**: `string`
  - **max**: `500`
- `quantity` - Item quantity
  - **required**: `true`
  - **type**: `string or number`
  - **max**: `30` characters
  - **format**:
    - Must only accept positive numbers;
    - Numbers should not have a thousand separator;
    - Must accept integers and decimals with `,` as a separator;
    - Must not accept `.` as a decimal separator;
    - Accepts a maximum of two decimal places;
    - **Example of valid formats**: `15236,15` | `458`
- `measurementUnit` - Unit of measurement
  - **required**: `false`
  - **type**: `string`
  - Only accept the following formats: [Tabela_Unidades_de_Medida_Comercial](https://docs.google.com/spreadsheets/d/1L7GsmNp9Ft-DdGL9X3KcU7YcqZHvnWvDT6WU3f-xY4k/edit?gid=1500856119#gid=1500856119)
  - Accept uppercase and lowercase
- `priceUnit` - Unit price (decimal with precision 19,2)
  - **required**: `true`
  - **type**: `string or number`
  - maintain decimal precision, do not round
  - **max**: `30` characters
  - **format**:
    - Must only accept positive numbers;
    - Numbers should not have a thousand separator;
    - Must accept integers and decimals with `,` as a separator;
    - Must not accept `.` as a decimal separator;
    - Accepts a maximum of two decimal places;
    - **Example of valid formats**: `15236,15` | `458`
- `totalValue` - Total value of the item
  - **required**: `false`
  - **type**: `string | string[] / number | number[]`
- `fiscalOperationCode` - Fiscal operation code
  - **required**: `false`
  - **type**: `string`
  - **max**: `500`
- `ncm` - Product's NCM code
  - **required**: `false`
  - **type**: `string`
  - **max**: `255`
- `currency` - Currency
  - **Required**: `true`
  - **type**: `string`
  - Only accept standard [ISO Code](https://www.iban.com/currency-codes) values (accept uppercase and lowercase characters and transform them into uppercase)

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