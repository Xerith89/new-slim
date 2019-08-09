import React from 'react';
import TopBar from '../Components/Core/TopBar/TopBar';
import {render, cleanup, fireEvent} from '@testing-library/react';


afterEach(cleanup)

test('TopBar component renders to the DOM', () => {
    const {getByTestId} = render(<TopBar />);
    expect(getByTestId('topbar')).toMatchSnapshot();
});

test('Cog toggles settings menu', () => {
    const {queryByText, getByTestId} = render(<TopBar user="Alex"/>)
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
    fireEvent.click(getByTestId('optionsToggler'));
    expect(queryByText('Logout')).toBeTruthy();
    expect(queryByText('Settings')).toBeTruthy();
    fireEvent.click(getByTestId('optionsToggler'));
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
});

test('Magnifying glass toggles search menu', () => {
    const {queryByText, getByTestId} = render(<TopBar user="Alex"/>)
    expect(queryByText('Quick Search')).toBeFalsy();
    fireEvent.click(getByTestId('searchToggler'));
    expect(queryByText('Quick Search')).toBeTruthy();
    fireEvent.click(getByTestId('searchToggler'));
    expect(queryByText('Quick Search')).toBeFalsy();
});

test('Clicking on an option closes the other', () => {
    const {queryByText, getByTestId} = render(<TopBar user="Alex"/>)
    fireEvent.click(getByTestId('searchToggler'));
    fireEvent.click(getByTestId('optionsToggler'));
    expect(queryByText('Logout')).toBeTruthy();
    expect(queryByText('Settings')).toBeTruthy();
    expect(queryByText('Quick Search')).toBeFalsy();
    fireEvent.click(getByTestId('searchToggler'));
    expect(queryByText('Logout')).toBeFalsy();
    expect(queryByText('Settings')).toBeFalsy();
    expect(queryByText('Quick Search')).toBeTruthy();
});
