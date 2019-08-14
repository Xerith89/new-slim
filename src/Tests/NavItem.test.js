import React from 'react';
import NavItem from '../Components/Core/NavCol/NavItem';
import {render, cleanup} from '@testing-library/react';


afterEach(cleanup)

test('NavItem component renders to the DOM', () => {
    const {getByText} = render(<NavItem links={["navItemTest"]} />);
    expect(getByText('navItemTest')).toMatchSnapshot();
});