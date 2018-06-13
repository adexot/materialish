import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableContext = React.createContext({ columnProps: {} });

const columnInheritedProps = ['width', 'rightBorder'];

function areEqualShallow(a, b) {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

export default class Table extends Component {
  render() {
    const { children, loading = false, className = '', ...props } = this.props;
    return (
      <TableContext.Provider value={this.state.context}>
        <div
          className={`mt-table ${
            loading ? 'mt-table-loading' : ''
          } ${className}`}
          role="table"
          {...props}>
          {children}
        </div>
      </TableContext.Provider>
    );
  }

  setColumnsProps = map => {
    this.setState(state => ({
      context: {
        ...state.context,
        columnProps: map,
      },
    }));
  };

  state = {
    context: {
      columnProps: {},
      setColumnsProps: this.setColumnsProps,
    },
  };
}

class TableHead extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div
        className={`mt-table_header ${className}`}
        role="rowgroup"
        {...props}>
        {children}
      </div>
    );
  }
}

class TableHeadRow extends Component {
  render() {
    const {
      children,
      className = '',
      columnProps, // eslint-disable-line
      setColumnsProps, // eslint-disable-line
      ...props
    } = this.props;
    return (
      <div
        className={`mt-table_row mt-table_headerRow ${className}`}
        role="row"
        {...props}>
        {children}
      </div>
    );
  }

  componentDidMount() {
    const { children, setColumnsProps } = this.props;
    const map = {};
    React.Children.forEach(children, (child, index) => {
      Object.keys(child.props).forEach(propName => {
        if (columnInheritedProps.includes(propName)) {
          map[index] = map[index] || {};
          map[index][propName] = child.props[propName];
        }
      });
    });
    setColumnsProps(map);
  }

  componentDidUpdate() {
    const { children, setColumnsProps, columnProps } = this.props;
    const map = {};
    React.Children.forEach(children, (child, index) => {
      Object.keys(child.props).forEach(propName => {
        if (columnInheritedProps.includes(propName)) {
          map[index] = map[index] || {};
          map[index][propName] = child.props[propName];
        }
      });
    });

    //Object is empty
    if (Object.keys(map).length === 0 && map.constructor === Object) {
      return;
    }

    for (const prop in map) {
      if (map.hasOwnProperty(prop)) {
        if (!areEqualShallow(map, columnProps)) return;
      }
    }

    setColumnsProps(map);
  }
}

const WrappedTableHeadRow = props => {
  return (
    <TableContext.Consumer>
      {ctxProps => <TableHeadRow {...props} {...ctxProps} />}
    </TableContext.Consumer>
  );
};

class TableHeadCell extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <TableCell
        className={`mt-table_headerCell ${className}`}
        role="columnheader"
        {...props}>
        <div className="mt-table_headerCellContent">{children}</div>
      </TableCell>
    );
  }
}

class TableBody extends Component {
  render() {
    const { className = '', children, ...props } = this.props;
    return (
      <div className={`mt-table_body ${className}`} role="rowgroup" {...props}>
        {children}
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    const isClickable = typeof props.onClick === 'function';
    return (
      <TableContext.Consumer>
        {({ columnProps }) => (
          <div
            className={`mt-table_row ${
              isClickable ? 'mt-table-clickableElement' : ''
            } ${className}`}
            role="row"
            {...props}>
            {React.Children.map(children, (child, index) => {
              const childProps =
                columnProps && columnProps[index] ? columnProps[index] : {};
              return React.cloneElement(child, {
                ...childProps,
              });
            })}
          </div>
        )}
      </TableContext.Consumer>
    );
  }
}

class TableCell extends Component {
  render() {
    const {
      children,
      className = '',
      rightBorder = false,
      width,
      style,
      ...props
    } = this.props;
    return (
      <div
        className={`mt-table_cell ${
          rightBorder ? 'mt-table_cell-rightBorder' : ''
        } ${className}`}
        role="cell"
        style={{
          ...style,
          minWidth: width ? width : null,
          maxWidth: width ? width : null,
        }}
        {...props}>
        {children}
      </div>
    );
  }
}

class TableExpandedRowContent extends Component {
  render() {
    const { className = '', children, open, ...props } = this.props;
    return (
      <div
        className={`mt-table_expandedRowContent ${
          open ? 'mt-table_expandedRowContent-open' : ''
        }${className}`}
        {...props}
        ref={this.getRef}>
        {children}
      </div>
    );
  }

  componentDidMount() {
    if (!this.el) return;
    const bb = this.el.getBoundingClientRect();
    this.el.style.setProperty(
      '--mt-table-cellHeight',
      this.props.open ? `${bb.height}px` : 0
    );
  }

  componentDidUpdate() {
    if (!this.el) return;

    const initialBb = this.el.getBoundingClientRect();
    this.el.style.transition = 'none';
    this.el.style.display = 'block';
    this.el.style.height = 'auto';
    const bb = this.el.getBoundingClientRect();
    this.el.style.height = null;
    this.el.style.transition = null;
    this.el.style.display = null;

    if (!this.props.open) {
      if (initialBb.height) {
        this.el.style.setProperty(
          '--mt-table-cellHeight',
          `${initialBb.height}px`
        );
        requestAnimationFrame(() => {
          this.el && this.el.style.setProperty('--mt-table-cellHeight', 0);
        });
        return;
      }
      this.el.style.setProperty('--mt-table-cellHeight', 0);
      return;
    }

    requestAnimationFrame(() => {
      if (!this.el) return;
      this.el.style.setProperty('--mt-table-cellHeight', `${bb.height}px`);
      this.el.addEventListener(
        'transitionend',
        () => {
          this.el && this.el.style.setProperty('--mt-table-cellHeight', 'auto');
        },
        { once: true }
      );
    });
  }

  getRef = el => {
    this.el = el;
  };
}

Table.Head = TableHead;
Table.HeadRow = WrappedTableHeadRow;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.ExpandedRowContent = TableExpandedRowContent;
