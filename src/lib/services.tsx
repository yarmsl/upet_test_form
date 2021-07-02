import { ChangeEvent } from 'react';

const capitalFirstLetter = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => {
	let a: string = e.target.value;
	a = a.replace(/[0-9]/g, '');
	a = `${a.substr(0, 1).toUpperCase()}${a.slice(1)}`;
	return a;
};

const phoneFormatUSA = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => {
	let number: string = e.target.value;
	number = number.replace(/[^0-9]/g, '');
	const area = number.substr(0, 3),
		pre = number.substr(3, 3),
		tel = number.substr(6, 4);
	if (area.length === 0) {
		number = '';
	} else if (area.length < 3 || pre.length === 0) {
		number = `(${area}`;
	} else if (area.length === 3 && pre.length < 3 || tel.length === 0) {
		number = `(${area}) ${pre}`;
	} else if (area.length === 3 && pre.length === 3) {
		number = `(${area}) ${pre}-${tel}`;
	}
	return number;
};

const phoneFormatAUS = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => {
	let number: string = e.target.value;
	number = number.replace(/[^0-9]/g, '');
	const area = number.substr(0, 4),
		pre = number.substr(4, 3),
		tel = number.substr(7, 3);
	if (area.length === 0) {
		number = '';
	} else if (area.length < 4 || pre.length === 0) {
		number = `${area}`;
	} else if (area.length === 4 && pre.length < 3 || tel.length === 0) {
		number = `${area} ${pre}`;
	} else if (area.length === 4 && pre.length === 3) {
		number = `${area} ${pre} ${tel}`;
	}
	return number;
};

export { capitalFirstLetter, phoneFormatUSA, phoneFormatAUS };