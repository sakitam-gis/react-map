/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';
import LZString from 'lz-string';
import { Icon, Tooltip } from 'antd';
import EditButton from './EditButton';
import BrowserFrame from '../../BrowserFrame';

function compress(string) {
  return LZString.compressToBase64(string)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
}

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      codeExpand: false,
      sourceCode: '',
      copied: false,
      copyTooltipVisible: false,
      showRiddleButton: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { highlightedCode } = nextProps;
    const div = document.createElement('div');
    div.innerHTML = highlightedCode[1].highlighted;
    this.setState({ sourceCode: div.textContent });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { codeExpand, copied, copyTooltipVisible } = this.state;
    const { expand } = this.props;
    return (
      (codeExpand || expand) !== (nextState.codeExpand || nextProps.expand)
      || copied !== nextState.copied
      || copyTooltipVisible !== nextState.copyTooltipVisible
    );
  }

  componentDidMount() {
    const { meta, location } = this.props;
    if (meta.id === location.hash.slice(1)) {
      this.anchor.click();
    }
    this.componentWillReceiveProps(this.props);
  }

  handleCodeExpand = () => {
    const { codeExpand } = this.state;
    this.setState({ codeExpand: !codeExpand });
  };

  saveAnchor = anchor => {
    this.anchor = anchor;
  };

  handleCodeCopied = () => {
    this.setState({ copied: true });
  };

  onCopyTooltipVisibleChange = visible => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible
    });
  };

  render() {
    const { state } = this;
    const { props } = this;
    const {
      meta,
      src,
      content,
      preview,
      highlightedCode,
      style,
      highlightedStyle,
      expand,
      themeConfig
    } = props;
    const { showRiddleButton, copied } = state;
    if (!this.liveDemo) {
      this.liveDemo = meta.iframe ? (
        <BrowserFrame>
          <iframe src={src} height={meta.iframe} title="demo" />
        </BrowserFrame>
      ) : (
        preview(React, ReactDOM)
      );
    }
    const codeExpand = state.codeExpand || expand;
    const codeBoxClass = classNames({
      'code-box': true,
      expand: codeExpand
    });
    const localizedTitle = meta.title;
    const introChildren = props.utils.toReactComponent(
      ['div'].concat(content)
    );

    const highlightClass = classNames({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand
    });

    const prefillStyle = `@import '@sakitam-gis/react-map/dist/react-map.css';\n\n${style || ''}`.replace(new RegExp(`#${meta.id}\\s*`, 'g'), '');
    const html = `<div id="container" style="padding: 24px"></div>
    <script>
      var mountNode = document.getElementById('container');
    </script>`;

    const codepenPrefillConfig = {
      title: `${localizedTitle} - ${themeConfig.codepenPrefillConfig.title}`,
      html,
      js: state.sourceCode
        // eslint-disable-next-line
        .replace(/import\s+\{\s+(.*)\s+\}\s+from\s+\'@sakitam-gis\/react-map\';?/, 'const { $1 } = ReactMap;')
        .replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'antd';?/, 'const { $1 } = antd;'),
      css: prefillStyle,
      editors: themeConfig.codepenPrefillConfig.editors || '001',
      css_external: themeConfig.codepenPrefillConfig.css_external || '',
      js_external: themeConfig.codepenPrefillConfig.js_external
        .map(url => `https://unpkg.com/${url}`)
        .join(';'),
      js_pre_processor: themeConfig.codepenPrefillConfig.js_pre_processor || 'typescript'
    };
    const riddlePrefillConfig = {
      title: `${localizedTitle} - ${themeConfig.riddlePrefillConfig.title}`,
      js: state.sourceCode,
      css: prefillStyle
    };
    const dependencies = state.sourceCode.split('\n').reduce(
      (acc, line) => {
        const matches = line.match(/import .+? from '(.+)';?$/);
        if (matches && matches[1]) {
          acc[matches[1]] = 'latest';
        }
        return acc;
      },
      { react: 'latest', 'react-dom': 'latest' }
    );
    const codesanboxPrefillConfig = {
      files: {
        'package.json': {
          content: {
            dependencies
          }
        },
        'index.css': {
          content: (style || '').replace(new RegExp(`#${meta.id}\\s*`, 'g'), '')
        },
        'index.js': {
          content: `
import React from 'react';
import ReactDOM from 'react-dom';
${dependencies.antd ? "import 'antd/dist/antd.css';" : ''}
import '@sakitam-gis/react-map/dist/react-map.css';
import './index.css';
${state.sourceCode.replace('mountNode', "document.getElementById('container')")}
          `
        },
        'index.html': {
          content: html
        }
      }
    };
    return (
      <section className={codeBoxClass} id={meta.id}>
        <section className="code-box-demo">
          {this.liveDemo}
          {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
        </section>
        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${meta.id}`} ref={this.saveAnchor}>
              {localizedTitle}
            </a>
            <EditButton
              title="在 Github 上编辑此页！"
              filename={meta.filename}
            />
          </div>
          {introChildren}
          <Tooltip title={codeExpand ? 'Hide Code' : 'Show Code'}>
            <span className="code-expand-icon">
              <img
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                className={
                  codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'
                }
                onClick={this.handleCodeExpand}
              />
              <img
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                className={
                  codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'
                }
                onClick={this.handleCodeExpand}
              />
            </span>
          </Tooltip>
        </section>
        <section className={highlightClass} key="code">
          <div className="highlight">
            <div className="code-box-actions">
              {showRiddleButton ? (
                <form
                  action="//riddle.alibaba-inc.com/riddles/define"
                  method="POST"
                  target="_blank"
                >
                  <input
                    type="hidden"
                    name="data"
                    value={JSON.stringify(riddlePrefillConfig)}
                  />
                  <Tooltip title="45">
                    <input
                      type="submit"
                      value="Create New Riddle with Prefilled Data"
                      className="code-box-riddle"
                    />
                  </Tooltip>
                </form>
              ) : null}
              <form
                action="https://codepen.io/pen/define"
                method="POST"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="data"
                  value={JSON.stringify(codepenPrefillConfig)}
                />
                <Tooltip title="在 CodePen 中打开">
                  <input
                    type="submit"
                    value="Create New Pen with Prefilled Data"
                    className="code-box-codepen"
                  />
                </Tooltip>
              </form>
              <form
                action="https://codesandbox.io/api/v1/sandboxes/define"
                method="POST"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="parameters"
                  value={compress(JSON.stringify(codesanboxPrefillConfig))}
                />
                <Tooltip title="在 CodeSandbox 中打开">
                  <input
                    type="submit"
                    value="Create New Sandbox with Prefilled Data"
                    className="code-box-codesandbox"
                  />
                </Tooltip>
              </form>
              <CopyToClipboard
                text={state.sourceCode}
                onCopy={this.handleCodeCopied}
              >
                <Tooltip
                  visible={state.copyTooltipVisible}
                  onVisibleChange={this.onCopyTooltipVisibleChange}
                  title={
                    copied ? 'copied' : 'copy'
                  }
                >
                  <Icon
                    type={
                      state.copied && state.copyTooltipVisible
                        ? 'check'
                        : 'copy'
                    }
                    className="code-box-code-copy"
                  />
                </Tooltip>
              </CopyToClipboard>
            </div>
            {props.utils.toReactComponent(highlightedCode)}
          </div>
          {highlightedStyle ? (
            <div key="style" className="highlight">
              <pre>
                <code
                  className="css"
                  dangerouslySetInnerHTML={{ __html: highlightedStyle }}
                />
              </pre>
            </div>
          ) : null}
        </section>
      </section>
    );
  }
}

export default Demo;
