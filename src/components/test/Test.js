import React, { Component } from 'react';

// THIS IS JUST A PLAY AREA TO DEMONSTRATE

class Test extends Component {
  // DEPRECATED
  // Called immediately before mounting occurs,
  // and before Component#render
  componentWillMount() {
    console.log('componentWillMount...');
  }

  // Called immediately after a component is mounted.
  // Setting state here will trigger re-rendering.
  componentDidMount() {
    console.log('componentDidMount');
  }

  // DEPRECATED
  // Called immediately before rendering when new props
  // or state is received. Not called for the initial render.
  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  // Called immediately after updating occurs.
  // Not called for the initial render.
  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  // DEPRECATED
  // Called when the component may be receiving new props.
  // React may call this even if props have not changed, so be // sure to compare new and existing props if you only want to // handle changes. (USUALLY USED WITH REDUX)
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...');
  }

  // Replaces componentWillReceiveProps
  // Responsible for ensuring that the state and props are in
  // sync for when it is required.
  //
  // It is a static function and as such has no this - you are
  // expected to return an object which will be merged into
  // the future state of the component
  //
  // Is used when a component is updated but also when it is
  // mounted, right after the constructor was called, so you
  // no longer need to use the constructor or class property
  // form of state if you want to set initial state from props.
  // A valid state object or null must be returned.
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  // It is usable mostly for reading the current DOM state in
  // the pre-commit phase, right before the changes from VDOM are
  // reflected in the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(' getSnapshotBeforeUpdate...');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
