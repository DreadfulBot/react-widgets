import cn from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { widgetEditable } from './util/interaction'
import * as CustomPropTypes from './util/PropTypes'

import Button from './Button'

class MultiselectTag extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    clearTagIcon: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.any,
    tagOptionComponent: CustomPropTypes.elementType,
  }

  @widgetEditable
  onClick = event => {
    const { value, disabled, onClick } = this.props
    if (!disabled) onClick(value, event)
  }

  renderDelete() {
    const { label, disabled, readOnly, clearTagIcon } = this.props

    return (
      <Button
        variant={null}
        onClick={this.onClick}
        className="rw-multiselect-tag-btn"
        disabled={disabled || readOnly}
        label={label || 'Remove item'}
      >
        {clearTagIcon}
      </Button>
    )
  }

  render() {
    const {
      id,
      children,
      focused,
      disabled,
      tagOptionComponent: Tag = 'div',
    } = this.props

    return (
      <Tag
        id={id}
        role="option"
        className={cn(
          'rw-multiselect-tag',
          disabled && 'rw-state-disabled',
          focused && !disabled && 'rw-state-focus'
        )}
      >
        <span className="rw-multiselect-tag-label">{children}</span>
        {this.renderDelete()}
      </Tag>
    )
  }
}

export default MultiselectTag
