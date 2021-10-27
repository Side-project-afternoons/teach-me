import React from 'react';
import { StyledBanner } from '../../StyledComponents/StyledBanner';
import { StyledH3 } from '../../StyledComponents/StyledH3';
import { StyledButton } from '../../StyledComponents/StyledButton';

import './BlueBanner.css';

const BlueBanner = () => {
	return (
		<StyledBanner className='bg-blue color-white'>
			<div className='flex-with-row-to-col w-80 m-auto'>
				<StyledH3 className='h3-cursive'>
					We're your strategic learning partner. Let's move skills forward
					together.
				</StyledH3>
				<StyledButton className='bg-blue color-white button-text min-w-160'>
					Request a demo
				</StyledButton>
			</div>
		</StyledBanner>
	);
};

export default BlueBanner;
