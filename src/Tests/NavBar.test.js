import React from 'react';
import NavBar from '../Components/Core/NavBar';
import {render} from '@testing-library/react';

test('NavBar component renders to the DOM', () => {
    const {getByTestId} = render(<NavBar />);
    expect(getByTestId('nav')).toMatchSnapshot();
});
