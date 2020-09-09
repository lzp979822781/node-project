import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';
import './index.scss';

/* function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component()); */
const content = <h1>hello webpack1</h1>;
ReactDOM.render(content, document.getElementById('root'))



