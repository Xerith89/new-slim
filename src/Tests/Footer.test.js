import React from 'react';
import Footer from '../Components/Core/Footer/Footer';
import {render, cleanup, fireEvent} from '@testing-library/react';


afterEach(cleanup)

test('Footer component renders to the DOM', () => {
    const {getByTestId} = render(<Footer />);
    expect(getByTestId('footer')).toMatchSnapshot();
});