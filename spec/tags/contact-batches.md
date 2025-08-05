Import Contact Batches, the data will be added to the **Contact Manager Database** in ZENVIA Customer Cloud. Once imported, these contacts can be used to trigger campaigns through the platform’s active and integrated channels. They will also serve as a data source for insights and reports provided by the system. And also will help power the **_RFV Calculation_**.

- [Product Batches API](#tag/Product-Batches)
- [Order Batches API](#tag/Order-Batches)
- [Invoice Batches API](#tag/Invoice-Batches)

## Building the CSV File

To use the Contact Batches API, you need to create a CSV file based on a predefined structure and in compliance with data types and their respective validations. You can read more about this standard below:

### CSV File Structure

The CSV file must follow the structure below:

- The first line must contain the table header.
- The columns must be in the predefined order, listed below.
- Columns must be separated by a semicolon (`;`).

The predefined order must be:

- **`externalPlatform`**: ERP identifier
  - **Required**: `false`
  - **Type**: `string`
  - **Enum**: `OMIE`, `BLING`, `TINY`, `MICROVIX`, `WBUY`, `OTHER`

- **`externalId`**: Contact's id
  - **Required**: `false`
  - **Type**: `string`
  - **Max**: `255`

- **`firstName`**: Contact's first name
  - **Required**: `true`
  - **Type**: `string`
  - **Max Size**: `100`
  - **Min Size**: `1`

- **`lastName`**: Contact's last name
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `100`

- **`birthdate`**: Contact's birthdate
  - **Required**: `false`
  - **Type**: `date`
  - **Format**: `YYYY-MM-DD` or `""`

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

- **`mobile`**: Contact's mobile number(s)
  - **Required**: `true` if `email` is not provided
  - **Type**: `string`
  - **Format**: Validate if there will be more than one contact number.
  - **Requirements**:
    - DDD (Area Code) - must be valid in Brazil.
    - **Max Size**: `9` (counting only the phone number).
    - **Min Size**: `8` (counting only the phone number).
    - If the above requirements are met, add DDI (country code) `55` to the phone numbers.
    - Parentheses and hyphens will be accepted and replaced by an empty string.
    - Other special characters will not be accepted.
    - Letters will not be accepted.

- **`landline`**: Contact's landline number(s)
  - **Required**: `false`
  - **Type**: `string`
  - **Format**: Validate if there will be more than one contact number.
  - **Requirements**:
    - DDD (Area Code) - must be valid in Brazil.
    - **Max Size**: `9` (counting only the phone number).
    - **Min Size**: `8` (counting only the phone number).
    - If the above requirements are met, add DDI (country code) `55` to the phone numbers.
    - Parentheses and hyphens will be accepted and replaced by an empty string.
    - Letters will not be accepted.

- **`country`**: Contact's country
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `100`
  - **Requirements**: Will only be valid if a valid state exists.

- **`zipcode`**: Contact's zipcode
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `50`
  - **Requirements**: Will only be imported if a valid state exists.

- **`state`**: Contact's state
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `100`
  - **Requirements**: It is a required value to import the contact's address. If it's invalid or not provided, the address-related values will be discarded.

- **`city`**: Contact's city
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `100`
  - **Requirements**: Will only be valid if a valid state exists.

- **`address`**: Contact's address
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `100`
  - **Requirements**: Will only be valid if a valid state exists.

- **`streetNumber`**: Contact's street number
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `50`
  - **Requirements**: Will only be valid if a valid state exists.

- **`neighborhood`**: Contact's neighborhood
  - **Required**: `false`
  - **Type**: `string`
  - **Max Size**: `100`
  - **Requirements**: Will only be valid if a valid state exists.

### Batch lifecycle

The contact batch will have the following lifecycle:

1. The batch is imported and saved on our database
2. The batch is processed in our infrastructure
3. After this, the batch will have two statuses:

- `SUCCESS`: The process of the batch was successful and the data was sent to the Contact Manager and the feedback was saved
- `FAILED`: The process of the batch was unsuccessful and the data was not sent to the Contact Manager and the feedback was saved

4. You can acess the feedback through and endpoint that you'll read further in this documentation.

All CSV files stored in our infrastructure (sended CSV and feedback CSV) have an expiration date of 10 days, counting by the day of it's creation.
