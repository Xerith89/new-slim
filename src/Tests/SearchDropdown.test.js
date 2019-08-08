import React from 'react';
import SearchDropdown from '../Components/Core/SearchDropdown';
import {render} from '@testing-library/react';

test('Search dropdown component renders to the DOM', () => {
    const {getByTestId} = render(<SearchDropdown />);
    expect(getByTestId('searchMenu')).toMatchSnapshot();
});
