import { ChangeEvent } from 'react';

const capitalFirstLetter = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => {
	let a: string = e.target.value;
	a = a.replace(/[0-9]/g, '');
	a = `${a.substr(0,1).toUpperCase()}${a.slice(1)}`;
	return a;
};

export {capitalFirstLetter};