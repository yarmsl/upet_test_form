import React, {createContext} from 'react';
import { USAflagIcon, AUSflagIcon } from '../UI/icons/FlagsIcons';
import { phoneFormatUSA, phoneFormatAUS } from './services';

const countries =  [
	{ id: 1, brevis: 'USA', icon: <USAflagIcon />, code: '+1', title: 'United States', phoneformat: phoneFormatUSA, count: 14 },
	{ id: 2, brevis: 'AUS', icon: <AUSflagIcon />, code: '+61', title: 'Australia', phoneformat: phoneFormatAUS, count: 12 }
];
export const CountryCTX = createContext(countries[0]);
export default countries;