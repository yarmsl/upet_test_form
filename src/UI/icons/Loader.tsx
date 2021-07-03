import React, { ReactElement } from 'react';

const Loader = (): ReactElement => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none"><defs />
			<path fill="#02E0B1" d="M48.033 22.194c.351 1.539.567 3.159.567 4.806 0 11.934-9.666 21.6-21.6 21.6-11.934 0-21.6-9.666-21.6-21.6C5.4 15.066 15.066 5.4 27 5.4c4.266 0 8.208 1.242 11.556 3.375l3.888-3.888A26.73 26.73 0 0027 0C12.096 0 0 12.096 0 27s12.096 27 27 27 27-12.096 27-27c0-3.213-.594-6.291-1.62-9.153l-4.347 4.347z" />
			<animateTransform attributeName='transform'
				from='0 0 0'
				to='360 0 0'
				type='rotate'
				dur='1s'
				repeatCount="indefinite" />
		</svg>
	);
};

export default Loader;
