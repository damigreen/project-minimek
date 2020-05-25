import { ORM } from 'redux-orm';
import Pilot from '../../features/pilots/Pilot'

const orm = new ORM({
  stateSelector: state => state.orm,
});

orm.register(Pilot)

export default orm;
