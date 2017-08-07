import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from 'views/shared/button';

import styles from './tabs.scss';

class Tab extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      label: PropTypes.string.isRequired
    };
  }

  render() {
    return (
      <div className={classNames(styles.card, this.props.className)}>
        <span className={styles.label}>{this.props.label}</span>
      </div>
    );
  }
}

export default class Tabs extends Component {
  static get propTypes() {
    return {
      onChangeTab: PropTypes.func.isRequired,
      categoriesTabs: PropTypes.array.isRequired,
      currentTabIndex: PropTypes.number.isRequired,
      children: PropTypes.element.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: this.props.categoriesTabs.find((current) => current.id === 0),
      currentIndex: 0
    };
  }

  handleChangeTab(next) {
    const nextIndex =  this.state.currentIndex + next;
    this.setState({
      currentTab: this.props.categoriesTabs.find((current) => current.id === nextIndex),
      currentIndex: nextIndex
    });
    console.log(nextIndex);
    this.props.onChangeTab(this.props.categoriesTabs[nextIndex]);
  }

  renderTabs() {
    return (
      this.props.categoriesTabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className={styles.tab}
          >
            <Tab
              className={classNames(this.props.currentTabIndex >= tab.id ? styles.current : null, tab.className)}
              label={tab.label}
            />
          </div>
        );
      })
    );
  }

  render() {
    const inc = 1;
    const dec = -1;
    console.log('this.state.currentIndex', this.state.currentIndex);
    return (
      <div className={styles.content}>
        <Button
          className={this.state.currentIndex == 0 ? styles.hide : null}
          type='link disabled'
          onClick={this.handleChangeTab.bind(this, dec)}
          enable={false}
        >
          {'<<'}
        </Button>
        <div className={styles.wizardContainer}>
          <div className={styles.tabs}>
            {this.renderTabs()}
          </div>
          <div className={styles.tabContent}>
            {this.props.children}
          </div>
        </div>
        <Button type='link' onClick={this.handleChangeTab.bind(this, inc)} >
          {'>>'}
        </Button>
      </div>
    );
  }
}
