import React from 'react';
import NavBlock from '../Components/Core/NavCol/NavBlock';
import {render, cleanup, fireEvent} from '@testing-library/react';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

afterEach(cleanup);

const underwritingLinks = {
    links: [
        "New Quote",
        "Renewals",
        "Another Link",
    ]
}

test('NavBlock component renders to the DOM', () => {
    const {getByText} = render(<NavBlock icon={faPencilAlt}title="Underwriting" links={underwritingLinks.links} />);
    expect(getByText('Underwriting')).toMatchSnapshot();
});

