import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon, Badge } from 'antd';

class CopyableIcon extends React.Component {
  state = {
    justCopied: false
  };

  onCopied = () => {
    this.setState({ justCopied: true }, () => {
      setTimeout(() => {
        this.setState({ justCopied: false });
      }, 2000);
    });
  };

  render() {
    const { type, isNew } = this.props;
    const { justCopied } = this.state;
    const text = `<Icon type="${type}" />`;
    return (
      <CopyToClipboard text={text} onCopy={this.onCopied}>
        <li className={justCopied ? 'copied' : ''}>
          <Icon type={type} />
          <span className="anticon-class">
            <Badge dot={isNew}>{type}</Badge>
          </span>
        </li>
      </CopyToClipboard>
    );
  }
}

export default CopyableIcon;
