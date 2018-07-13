import React from 'react';

class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.isload = false;
  }

  componentDidMount () {
    this.isload = true;
  }

  render () {
    const { themeConfig: {
      footer: {
        copyright
      }
    } } = this.props;
    return (
      <footer id="footer">
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by {copyright}
        </div>
      </footer>
    );
  }
}

export default Footer;
