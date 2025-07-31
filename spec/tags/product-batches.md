Import Product Batches, the data will be added to the **Product Catalog Database** in ZENVIA Customer Cloud. Once imported, these products can be used to trigger campaigns, personalize offers, and serve as a data source for insights and reports provided by the system. They will also help integrate with other platform functionalities.


## Building the CSV File


To use the Product Batches API, you need to create a CSV file based on a predefined structure and in compliance with data types and their respective validations. You can read more about this standard below:


### CSV File Structure


The CSV file must follow the structure below:


- The first line must contain the table header.
- The columns must be in the predefined order, listed below.
- Columns must be separated by a semicolon (`;`).


The predefined order must be:


- **`externalPlatform`**: Identificador do ERP
  - **Required**: `true`
  - **Type**: `string`
  - **Enum**: `OMIE`, `BLING`, `TINY`, `MICROVIX`, `WBUY`, `OTHER`

- **`externalId`**: ID do produto na plataforma externa
  - **Required**: `true`
  - **Type**: `string`
  - **Max Size**: `255`

- **`name`**: Nome do produto
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`sku`**: SKU (Stock Keeping Unit) do produto
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`

- **`ean`**: EAN (European Article Number) do produto
  - **Required**: `false`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`brand`**: Marca do produto
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`description`**: Descrição detalhada do produto
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `500`

- **`measurementUnit`**: Unidade de medida do produto
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`
  - **Format**: Produtos | Unidades de Medidas

- **`priceUnit`**: Preço unitário do produto
  - **Required**: `true`
  - **Type**: `string` || `number`
  - **Max Size**: `30`
  - **Format**:
    - Deve aceitar apenas números positivos;
    - Os números não deverão ter separador de milhar;
    - Deve aceitar números inteiros e decimais com separador de `,` (vírgula);
    - Não deve aceitar separador decimal de `.`;
    - Exemplo de formatos válidos: `15236,15` | `458`

- **`currency`**: Moeda
  - **Required**: `true`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `3`
  - **Format**: Produtos | Moedas

- **`ncm`**: NCM (Nomenclatura Comum do Mercosul)
  - **Required**: `false`
  - **Type**: `string`
  - **Min Size**: `1`
  - **Max Size**: `255`


### Batch lifecycle


The product batch will have the following lifecycle:


1. The batch is imported and saved on our database.
2. The batch is processed in our infrastructure.
3. After this, the batch will have two statuses:


- `SUCCESS`: The batch process was successful, and the data was sent to the Product Catalog, and feedback was saved.
- `FAILED`: The batch process was unsuccessful, and the data was not sent to the Product Catalog, and feedback was saved.


4. You can access the feedback through an endpoint that you'll read further in this documentation.

---