import React from 'react';
import NavBar from '../Components/Core/NavBar';
import {render, cleanup, fireEvent} from '@testing-library/react';


afterEach(cleanup)

test('NavBar component renders to the DOM', () => {
    const {getByTestId} = render(<NavBar />);
    expect(getByTestId('nav')).toMatchSnapshot();
});

test('Cog toggles dropdown menu', () => {
    const {queryByText, getByTestId} = render(<NavBar />)
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
    fireEvent.click(getByTestId('toggler'));
    expect(queryByText('Logout')).toBeTruthy();
    expect(queryByText('Settings')).toBeTruthy();
    fireEvent.click(getByTestId('toggler'));
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
});
