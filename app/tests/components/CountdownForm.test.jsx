var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    it('should call onSetCountdown if valid seonds entered', () => {
        //create spy
        var spy = expect.createSpy();
        //render component and inject spy into jQuery element
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        //create jQuery selector to check if spy called when form submitted
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        //use jQuery to search for nested child
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
        it('should not call onSetCountdown if invalid seonds entered', () => {
        //create spy
        var spy = expect.createSpy();
        //render component and inject spy into jQuery element
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        //create jQuery selector to check if spy called when form submitted
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';
        //use jQuery to search for nested child
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});