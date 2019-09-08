/* flow */
import React, { Component, Fragment } from 'react';

import Typescript from './Typescript';

import { prefixMrTitleFlow } from './flowFunctions';
import { TestFlowType } from './flowTypes';
import { prefixMrTitleTypescript } from './typescriptFunctions';
import { TestTypescriptType } from './typescriptTypes';

export class App extends Component {
    render() {
        const flowName = prefixMrTitleFlow('Rockefeller');
        const typescriptName = prefixMrTitleTypescript('Rockefeller');

        // Flow type-checker not honouring Flow type :(
        const dataFlow: TestFlowType = {
            firstName: 'John Flow',
            name: 'John Lee Flow'
        };
        console.log(dataFlow.firstName);
        console.log(dataFlow.name);

        // Flow type-checker not honouring Typescript type (expected)
        const dataTypescript: TestTypescriptType = {
            firstName: 'John Typescript',
            name: 'John Lee Typescript'
        };
        console.log(dataTypescript.firstName);
        console.log(dataTypescript.name);

        return (
            <Fragment>
                <p>Hi, I've been packed and transpiled, {flowName}</p>
                <p>Hi, I've been packed and transpiled, {typescriptName}</p>
                <Typescript />
            </Fragment>
        );
    }
}
