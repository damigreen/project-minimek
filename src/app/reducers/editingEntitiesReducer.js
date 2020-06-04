import { createReducer } from '../../common/utils/reducerUtils';

import orm from '../orm/';
const defaultEditingEntities = orm.getEmptyState();

export default createReducer(defaultEditingEntities, {

});
