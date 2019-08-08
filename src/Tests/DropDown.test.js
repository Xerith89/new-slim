import React from 'react';
import DropDown from '../Components/Core/DropDown';
import {render} from '@testing-library/react';

test('DropDown component renders to the DOM', () => {
    const {getByTestId} = render(<DropDown />);
    expect(getByTestId('menu')).toMatchSnapshot();
});
