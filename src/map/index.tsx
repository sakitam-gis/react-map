import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger';

export interface BaseButtonProps {
  type?: ButtonType;
  text?: string;
  className?: string;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    type: '',
    text: ''
  };

  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
  };

  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      clicked: false,
      hasTwoCNChar: false
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = e => {
    const onClick = this.props.onClick;
    if (onClick) {
      (onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >)(e);
    }
  };

  render() {
    const { type, className, text } = this.props;
    const classes = classNames('', className);
    return (
      <button type={type} className={classes} onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}
