/// <reference types="@types/google.maps" />

import { User } from './User'
import { CustomMap } from "./CustomMap";
import { Company } from './Company';

// console.log('Hi there', user);
// const company = new Company();

// console.log('company', company);
const user = new User();
const customMap = new CustomMap('map');
const company = new Company();
// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)

customMap.addMarker(user)
customMap.addMarker(company)




