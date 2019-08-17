import React from 'react';
import Breadcrumb from '../Components/Core/Breadcrumb';
import {render, cleanup} from '@testing-library/react';


afterEach(cleanup)

test('Breadcrumb component renders to the DOM', () => {
    const {getByText} = render(<Breadcrumb title="Dashboard"/>);
    expect(getByText('Dashboard')).toMatchSnapshot();
});