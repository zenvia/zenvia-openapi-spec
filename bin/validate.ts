import * as validator from 'oas-validator';
import spec from '../spec';

async function main() {
  const validateOptions = { prettify: false, lint: false, validateSchema: 'first' };
  let valid = false;
  try {
    valid = await validator.validate(spec, validateOptions);
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
    const { context } = validateOptions as any;
    if (context) {
      console.error('Location', context.pop());
    }
    process.exit(1);
  }
  if (!valid) {
    process.exit(1);
  }
}

main();
