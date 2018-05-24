import React, { Component, Fragment } from 'react';
import * as Materialish from 'materialish';
import { withRouteData } from 'react-static';
import {
  Markdown,
  CodeManager,
  Editor,
  Preview,
} from '../vendor/doc-components';
import PropTypes from 'prop-types';
import './component-doc.css';

const demoScope = {
  React,
  Component,
  Fragment,
  PropTypes,
  ...Materialish,
};

const rootSourceUrl =
  'https://github.com/jamesplease/materialish/tree/master/src/';

export class ComponentDoc extends Component {
  render() {
    const { component, markdown, example } = this.props;

    const {
      name,
      description,
      componentKey,
      sourceLink,
      materialDocsLink,
    } = component;

    const sourceLinkToUse = sourceLink
      ? sourceLink
      : `${rootSourceUrl}${componentKey}`;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">{name}</h1>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a href={sourceLinkToUse} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-code" /> View Source
            </a>
          </li>
          {materialDocsLink && (
            <li className="componentDoc_linkItem">
              <a href={materialDocsLink} className="componentDoc_linkAnchor">
                <i className="componentDoc_icon zmdi zmdi-file-text" /> Material
                Docs
              </a>
            </li>
          )}
        </ul>
        <p className="paragraph">{description}</p>
        <CodeManager code={example}>
          {({ code, handleCodeChange }) => (
            <Fragment>
              {code && (
                <Preview
                  className="componentDoc_preview"
                  code={code}
                  scope={demoScope}
                />
              )}
              <div className="componentDoc_note">
                <span className="componentDoc_noteEmoji">🙌</span> Heads up!
                This code is editable. The preview above will update to reflect
                your changes.
              </div>
              <Editor
                className="componentDoc_editor"
                theme="oceanic-next"
                codeText={code}
                onChange={handleCodeChange}
              />
            </Fragment>
          )}
        </CodeManager>
        <Markdown markdownText={markdown} />
      </div>
    );
  }
}

export default withRouteData(ComponentDoc);
