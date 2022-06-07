import { ICodeSamples } from '../../../utils/code-samples';

const samples: ICodeSamples = {
  path: '/files',
  operations: {
    post: [
      { lang: 'Shell', label: 'Bash: multipart with data' as any, source: 'multipart+json.sh' },
      { lang: 'Shell', label: 'Bash: multipart' as any, source: 'multipart.sh' },
      { lang: 'Shell', label: 'Bash: raw multipart with data' as any, source: 'raw-multipart+json.sh' },
      { lang: 'Shell', label: 'Bash: URL' as any, source: 'json.sh' },
      { lang: 'Shell', label: 'Bash: binary' as any, source: 'body-content.sh' },
    ],
  },
};

export default samples;
