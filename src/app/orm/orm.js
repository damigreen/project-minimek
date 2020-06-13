import { ORM } from 'redux-orm';
import Pilot from '../../features/pilots/Pilot'
import Mech from '../../features/mechs/Mech'
import MechDesign from '../../features/mechs/MechDesign'
import Unit from '../../features/unitInfo/Unit'

const orm = new ORM({
  stateSelector: state => state.orm,
});

orm.register(Pilot, Mech, MechDesign, Unit);

export default orm;
