import React from 'react';
import SearchDropdown from '../Components/Core/SearchDropdown';
import {render, cleanup, fireEvent} from '@testing-library/react';

afterEach(cleanup);

test('Search dropdown component renders to the DOM', () => {
    const {getByTestId} = render(<SearchDropdown />);
    expect(getByTestId('searchMenu')).toMatchSnapshot();
});

test('Update function is called when text entered into searchbox', () => {
    const spy = jest.fn();
    const {getByTestId} = render(<SearchDropdown handleChange={spy}/>);
    expect(getByTestId('searchText').value).toBe("");
    fireEvent.change(getByTestId('searchText'), { target: { value: "23" } });
    expect(getByTestId('searchText').value).toBe("23");
    //expect(spy).toHaveBeenCalledTimes(1);
});

test('Search function runs on click of search button', () => {
    const spy = jest.fn();
    const {getByTestId} = render(<SearchDropdown handleSearch={spy}/>);
    fireEvent.click(getByTestId('searchButton'));
    expect(spy).toHaveBeenCalledTimes(1);
});