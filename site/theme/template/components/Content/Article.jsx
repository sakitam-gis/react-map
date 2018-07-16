import React, { Children, cloneElement } from 'react';
import DocumentTitle from 'react-document-title';
import { getChildren } from 'jsonml.js/lib/utils';
import { Timeline, Affix } from 'antd';
import EditButton from './EditButton';

class Article extends React.Component {
  componentDidMount () {
    this.componentDidUpdate();
  }

  componentDidUpdate () {
  }

  componentWillUnmount () {
  }

  getArticle (article) {
    const { content } = this.props;
    const { meta } = content;
    if (!meta.timeline) {
      return article;
    }
    const timelineItems = [];
    let temp = [];
    let i = 1;
    Children.forEach(article.props.children, child => {
      if (child.type === 'h2' && temp.length > 0) {
        timelineItems.push(<Timeline.Item key={i}>{temp}</Timeline.Item>);
        temp = [];
        i += 1;
      }
      temp.push(child);
    });
    if (temp.length > 0) {
      timelineItems.push(<Timeline.Item key={i}>{temp}</Timeline.Item>);
    }
    return cloneElement(article, {
      children: <Timeline>{timelineItems}</Timeline>
    });
  }

  render () {
    const { props } = this;
    const { content } = props;
    const { meta, description } = content;
    const { title, subtitle, filename } = meta;
    return (
      <DocumentTitle title={`${title} - ReactMap`}>
        <article
          className="markdown"
          ref={node => {
            this.node = node;
          }}
        >
          <h1>
            {title}
            {!subtitle ? null : (
              <span className="subtitle">{subtitle}</span>
            )}
            <EditButton
              title="编辑此页"
              filename={filename}
            />
          </h1>
          {!description
            ? null
            : props.utils.toReactComponent(
              ['section', { className: 'markdown' }].concat(
                getChildren(description)
              )
            )}
          {!content.toc || content.toc.length <= 1 || meta.toc === false ? null : (
            <Affix className="toc-affix" offsetTop={16}>
              {props.utils.toReactComponent(
                ['ul', { className: 'toc' }].concat(getChildren(content.toc))
              )}
            </Affix>
          )}
          {this.getArticle(
            props.utils.toReactComponent(
              ['section', { className: 'markdown' }].concat(
                getChildren(content.content)
              )
            )
          )}
          {props.utils.toReactComponent(
            [
              'section',
              {
                className: 'markdown api-container'
              }
            ].concat(getChildren(content.api || ['placeholder']))
          )}
        </article>
      </DocumentTitle>
    );
  }
}

export default Article;
