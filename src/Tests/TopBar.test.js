import React from 'react';
import TopBar from '../Components/Core/TopBar';
import {render, cleanup, fireEvent} from '@testing-library/react';


afterEach(cleanup)

test('TopBar component renders to the DOM', () => {
    const {getByTestId} = render(<TopBar />);
    expect(getByTestId('topbar')).toMatchSnapshot();
});

test('Cog toggles dropdown menu', () => {
    const {queryByText, getByTestId} = render(<TopBar />)
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
    fireEvent.click(getByTestId('toggler'));
    expect(queryByText('Logout')).toBeTruthy();
    expect(queryByText('Settings')).toBeTruthy();
    fireEvent.click(getByTestId('toggler'));
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
});
