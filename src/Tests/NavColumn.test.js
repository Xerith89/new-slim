import React from 'react';
import NavColumn from '../Components/Core/NavCol/NavColumn';
import {render, cleanup, fireEvent} from '@testing-library/react';


afterEach(cleanup)

test('NavColumn component renders to the DOM', () => {
    const {getByTestId} = render(<NavColumn />);
    expect(getByTestId('navcol')).toMatchSnapshot();
});