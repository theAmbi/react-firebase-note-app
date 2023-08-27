
import React from 'react';
import {render, screen} from '@testing-library/react';
import { SingleNote } from '../components/NoteAdditon/SingleNote';
import {act} from 'react-dom/test-utils'
import '@testing-library/jest-dom'; // Import the extend-expect for custom matchers


// mock API call
jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
    }
}));

describe('SingleNote component', () => {
    it('renders note title, edit and delete button', () => {
        const note = {
            id: '1',
            title: 'Test note',
            timestamp: {toDate: () => new Date()},
        };

        act(() => {
            render(<SingleNote note={note}/>);
        })

        // to test that title is rendered
        const titleElement = screen.getByText('Test note');
        expect(titleElement).toBeInTheDocument();

        const deleteBtn = screen.getByTitle('delete');
        expect(deleteBtn).toBeInTheDocument();
    });
});