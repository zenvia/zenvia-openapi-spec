import * as express from 'express';
import * as cors from 'cors';
import { sync as fileSearch } from 'glob';
import reload = require('reload');
import { generateJSON, generateYAML, generateReDocPage } from './commons';

const sendIndex = (req: express.Request, res: express.Response) =>
  res.end(generateReDocPage());

const sendJsonSpec = (req: express.Request, res: express.Response) =>
  res
  .type('application/json')
  .send(generateJSON());

const sendYamlSpec = (req: express.Request, res: express.Response) =>
  res
  .type('application/yaml')
  .send(generateYAML());

const sendNotFoundStatus = (req: express.Request, res: express.Response) =>
  res.sendStatus(404);

const sendInternalError = (err: Error, req: express.Request, res: express.Response) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};

const watchFile = (file: string) => {
  if (process.send) {
    process.send({
      cmd: 'NODE_DEV',
      required: file,
    });
  }
};

const watchFilesByPattern = (... patterns: string[]) => {
  patterns.forEach(p => fileSearch(p).forEach(f => watchFile(f)));
};

async function main() {
  const app = express();
  app.use(cors());
  const port = process.env.PORT || '8080';
  await reload(app, { port: parseInt(port, 10) + 1 });
  app.get('/', sendIndex);
  app.get('/openapi.json', sendJsonSpec);
  app.get('/openapi.yaml', sendYamlSpec);
  app.use(express.static('public'));
  app.use(sendNotFoundStatus);
  app.use(sendInternalError);
  app.listen(port);

  watchFilesByPattern(
    'spec/**/*.md',
    'spec/code_sample/**/*.js',
    'spec/code_sample/**/*.java',
    'spec/code_sample/**/*.sh',
    'public/**/*',
);

  const baseUrl = `http://localhost:${port}`;

  console.log(`Development server started: ${baseUrl}`);
  console.log('Watching changes...');
  console.log();
}

main();
