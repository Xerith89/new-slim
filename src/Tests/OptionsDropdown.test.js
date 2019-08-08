import React from 'react';
import OptionsDropdown from '../Components/Core/OptionsDropdown';
import {render} from '@testing-library/react';

test('Options dropdown component renders to the DOM', () => {
    const {getByTestId} = render(<OptionsDropdown />);
    expect(getByTestId('optionsMenu')).toMatchSnapshot();
});
