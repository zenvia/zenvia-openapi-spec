Import batches of contact-related data from platforms and databases external to ZENVIA Customer Cloud. This imported data will help power features like **RFV Calculation** and the **Contact Manager Database**, alongside other features that are used alongside other APIs like:

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
