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
	handleCountry: (brevis: string) => void;
	setOpened: (value: React.SetStateAction<boolean>) => void;
}

export type {countryInterface, ActionInterface, dataForm, context};