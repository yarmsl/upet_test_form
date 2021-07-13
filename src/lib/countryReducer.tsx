import React from 'react';
import { USAflagIcon, AUSflagIcon } from '../UI/icons/FlagsIcons';
import { phoneFormatUSA, phoneFormatAUS } from './services';
import { countryInterface, ActionInterface } from './interfaces';

const countryReducer = (state: countryInterface, country: ActionInterface): countryInterface => {
	switch (country.type) {
	case 'USA':
		return { icon: <USAflagIcon />, phoneformat: phoneFormatUSA, count: 14 };
	case 'AUS':
		return { icon: <AUSflagIcon />, phoneformat: phoneFormatAUS, count: 12 };
	default: 
		return { icon: <USAflagIcon />, phoneformat: phoneFormatUSA, count: 14 };
	}
};

export default countryReducer;