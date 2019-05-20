import { PathsObject } from 'openapi3-ts';
import { loadPathsObject } from '../../utils/module-loader';

const paths: PathsObject = loadPathsObject(__dirname);

export default paths;
