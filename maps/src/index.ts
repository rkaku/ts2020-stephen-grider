import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const compony = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(compony);
