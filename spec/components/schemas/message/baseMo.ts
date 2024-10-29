import * as _ from 'lodash';
import { createComponentRef } from '../../../../utils/ref';
import base from './base';

const newBase = _.cloneDeep(base);
delete newBase.properties.externalId;

export const ref = createComponentRef(__filename);
export default newBase;
