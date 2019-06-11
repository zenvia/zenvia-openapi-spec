export interface IOperationSample {
  lang: 'JavaScript' | 'Shell' | 'Java' | 'Python' | 'Go';
  label: 'Node.js' | 'Bash' | 'Java' | 'Python' | 'Go';
  source: string;
}
export interface ICodeSamples {
  path: string;
  operations: {
    [operation: string]: IOperationSample[],
  };
}

export interface ICodeSamplesByPath {
  [path: string]: ICodeSamples;
}
