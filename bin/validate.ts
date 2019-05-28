import * as validator from 'oas-validator';
import spec from '../spec';

async function main() {
  const validateOptions = { prettify: false, lint: false, validateSchema: 'first' };
  let valid = false;
  try {
    valid = await validator.validate(spec, validateOptions);
  } catch (e) {
    if (e instanceof validator.JSONSchemaError) {
      console.error('Failed OpenAPI3 schema validation:');
      const errors = JSON.parse(e.message.replace(/^.*\[/, '['));
      for (const error of errors) {
        console.error(`${error.dataPath} ${error.message}`);
      }
    } else {
      console.error(`${e.name}: ${e.message}`);
    }
    process.exit(1);
  }
  if (!valid) {
    process.exit(1);
  }
}

main();
