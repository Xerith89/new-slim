import React from 'react';
import OptionsDropdown from '../Components/Core/OptionsDropdown';
import {render} from '@testing-library/react';

test('Options dropdown component renders to the DOM', () => {
    const optionsLinks = {
        links: [
            "Settings",
            "Logout"
        ]
    }
    const {getByTestId} = render(<OptionsDropdown  links={optionsLinks.links} />);
    expect(getByTestId('optionsMenu')).toMatchSnapshot();
});
