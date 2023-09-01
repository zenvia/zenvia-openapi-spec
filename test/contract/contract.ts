/* tslint:disable: forin */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { assert } from 'chai';
import * as Enforcer from 'openapi-enforcer';
import spec from '../../spec';

describe('Loading OpenAPI specification by Enforcer', function() {

  this.timeout(5000);

  before(async () => {
    delete spec.paths['/files'].post.requestBody.content['multipart/form-data'].examples.multipart;
  });

  it('Checking for errors', (done) => {
    Enforcer(spec, { fullResult: true, toString: true })
      .then(({ error, warning }) => {
        if (error) {
          done(new Error(error));
          return;
        }
        done();
      });
  });

  it('Checking for warnings', (done) => {
    Enforcer(spec, { fullResult: true, toString: true })
      .then(({ error, warning }) => {
        if (warning) {
          done(new Error(warning));
          return;
        }
        done();
      });
  });

});

describe('API contract test against OpenAPI specification', () => {
  let enforcer;

  function formatErrorMessage(enforcerError): string {
    return enforcerError?.
    toString()?.
    replace(/\n/g, ' => ').
    replace(/\s+/g, ' ');
  }

  function loadTestCases(group: string): void {
    const cases = readdirSync(join(__dirname, 'cases', group)).filter(f => /^.*\.json$/.test(f));
    for (const caseFile of cases) {
      const caseFileContent = readFileSync(join(__dirname, 'cases', group, caseFile), 'utf-8');
      const testCase = JSON.parse(caseFileContent);
      it(testCase.name, () => {
        // check request
        const [request, requestErr, requestWarn] = enforcer.request(testCase.request, { allowOtherQueryParameters: [] });
        if (testCase.expectedFail) {
          assert.equal(formatErrorMessage(requestErr), testCase.expectedFail.error);
        } else {
          assert.isUndefined(requestErr, `Client request was rejected: [${formatErrorMessage(requestErr)}]`);
          assert.isUndefined(requestWarn, `Client request have warnings: [${formatErrorMessage(requestWarn)}]`);

          // check response
          const [, responseErr, responseWarn] = request.operation.response(testCase.response.status, testCase.response.body, testCase.response.headers);
          assert.isUndefined(responseErr, `Server response was rejected: [${formatErrorMessage(responseErr)}]`);
          assert.isUndefined(responseWarn, `Server response have warnings: [${formatErrorMessage(responseWarn)}]`);
        }
      });
    }
  }

  before(async function () {
    this.timeout(5000);
    enforcer = await Enforcer(spec, { componentOptions: {} });
  });

  describe('whatsapp messages', async () => {
    loadTestCases('channels/whatsapp');
  });

  describe('telegram messages', async () => {
    loadTestCases('channels/telegram');
  });

  describe('gbm messages', async () => {
    loadTestCases('channels/gbm');
  });

  describe('instagram messages', async () => {
    loadTestCases('channels/instagram');
  });

  describe('templates collection', async () => {
    loadTestCases('templates');
    describe('template comments', async () => {
      loadTestCases('templates/comments');
    });
  });

  describe('subscriptions collection', async () => {
    loadTestCases('subscriptions');
  });

  describe('batches', async () => {
    loadTestCases('batches');
  });

});
