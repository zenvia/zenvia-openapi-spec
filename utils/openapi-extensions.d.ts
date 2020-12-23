import {} from 'openapi3-ts';

declare module 'openapi3-ts' {
  export interface TagGroupObject {
    name: string;
    tags: string[];
  }
  export interface LogoObject {
    url: string;
  }
  export interface CodeSampleObject {
    lang: string;
    label?: string;
    source: string;
  }
  export interface SchemaObject {
    'x-unpublished'?: boolean;
  }
  /*
  export interface OpenAPIObject  extends ISpecificationExtension {
    'x-tagGroups'?: TagGroupObject[];
    'x-ignoredHeaderParameters'?: string[];
  }
  export interface InfoObject extends ISpecificationExtension {
    'x-logo'?: LogoObject;
  }
  export interface TagObject extends ISpecificationExtension {
    'x-traitTag'?: boolean;
    'x-displayName'?: string;
  }
  export interface OperationObject extends ISpecificationExtension {
    'x-code-samples'?: CodeSampleObject[];
  }
  export interface ParameterObject extends BaseParameterObject {
    'x-examples'?: ExampleObject;
  }
  export interface ResponseObject extends ISpecificationExtension {
    'x-summary'?: string;
  }
  export interface SchemaObject extends ISpecificationExtension {
    'x-nullable'?: boolean;
    'x-extendedDiscriminator': string;
  }
  */
}
