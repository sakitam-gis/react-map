import React from 'react';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { Row, Col, Icon, Affix, Tooltip } from 'antd';
import { getChildren } from 'jsonml.js/lib/utils';
import Demo from './Demo';
import EditButton from './EditButton';

export default class ComponentDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandAll: false
    };
  }

  handleExpandToggle = () => {
    const { expandAll } = this.state;
    this.setState({
      expandAll: !expandAll
    });
  };

  render() {
    const { props } = this;
    const { doc, location, themeConfig } = props;
    const { content, meta } = doc;
    const demos = Object.keys(props.demos).map(key => props.demos[key]);
    const { expandAll } = this.state;

    const isSingleCol = meta.cols === 1;
    // const leftChildren = []; // 支持示例的左右展示
    // const rightChildren = [];
    const children = [];
    const showedDemo = demos.some(demo => demo.meta.only)
      ? demos.filter(demo => demo.meta.only)
      : demos.filter(demo => demo.preview);
    showedDemo
      .sort((a, b) => a.meta.order - b.meta.order)
      .forEach((demoData) => {
        const demoElem = (
          <Demo
            {...demoData}
            key={demoData.meta.filename}
            utils={props.utils}
            expand={expandAll}
            location={location}
            themeConfig={themeConfig}
          />
        );
        children.push(demoElem);
        // if (index % 2 === 0 || isSingleCol) {
        //   leftChildren.push(demoElem);
        // } else {
        //   rightChildren.push(demoElem);
        // }
      });
    const expandTriggerClass = classNames({
      'code-box-expand-trigger': true,
      'code-box-expand-trigger-active': expandAll
    });

    const jumper = showedDemo.map(demo => {
      const { title } = demo.meta;
      const localizeTitle = title;
      return (
        <li key={demo.meta.id} title={localizeTitle}>
          <a href={`#${demo.meta.id}`}>{localizeTitle}</a>
        </li>
      );
    });

    const { title, subtitle, filename } = meta;
    return (
      <DocumentTitle
        title={`${subtitle || ''} ${title}`}
      >
        <article>
          <Affix className="toc-affix" offsetTop={16}>
            <ul id="demo-toc" className="toc">
              {jumper}
            </ul>
          </Affix>
          <section className="markdown">
            <h1>
              {title}
              {!subtitle ? null : <span className="subtitle">{subtitle}</span>}
              <EditButton
                title="编辑此页"
                filename={filename}
              />
            </h1>
            {props.utils.toReactComponent(
              ['section', { className: 'markdown' }].concat(
                getChildren(content)
              )
            )}
            <h2>
              代码演示
              <Tooltip
                title={expandAll ? '收起全部代码' : '展开全部代码'}
              >
                <Icon
                  type={`${expandAll ? 'appstore' : 'appstore-o'}`}
                  className={expandTriggerClass}
                  onClick={this.handleExpandToggle}
                />
              </Tooltip>
            </h2>
          </section>
          <Row gutter={16}>
            <Col
              span={isSingleCol ? '24' : '24'}
              className={
                isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'
              }
            >
              {children}
            </Col>
          </Row>
          {props.utils.toReactComponent(
            [
              'section',
              {
                className: 'markdown api-container'
              }
            ].concat(getChildren(doc.api || ['placeholder']))
          )}
        </article>
      </DocumentTitle>
    );
  }
}
