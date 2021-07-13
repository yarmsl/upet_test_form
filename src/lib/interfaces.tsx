interface countryInterface {
	icon: JSX.Element;
	phoneformat: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => string;
	count: number;
}

interface ActionInterface {
   type: string;
}

interface dataForm {
	firstName: string;
	secondName: string;
	phoneNumber: string;
	email: string;
	pass: string;
}

interface context {
	opened: boolean;
	setOpened: (value: React.SetStateAction<boolean>) => void;
	handleCountry: (brevis: string) => void;
}

export type {countryInterface, ActionInterface, dataForm, context};