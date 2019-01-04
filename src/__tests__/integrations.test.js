import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';


import Root from '../Root';
import App from '../components/App';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

/*
Normally, after Jest runs all the lines in a test, if no exceptions were thrown, it considers
the test to have passed. This however doesn't take into account delayed expectations like the
one below. There, you need to introduce the `done` function. If it is used, Jest will wait for
the developer to call it, and only then will know the test has finished.
 */
it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('#fetch-comments').simulate('click');

    moxios.wait(() => {
        // don't forget to force the component to rerender
        wrapped.update();

        expect(wrapped.find('li').length).toEqual(2);

        wrapped.unmount();
        done();
    });
});