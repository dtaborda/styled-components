import React, { Component, PropTypes } from 'react';

import styles from './content.scss';

export default class Content extends Component {
  static get propTypes() {
    return {
      currentTab: PropTypes.number.isRequired,
      nodo: PropTypes.array.isRequired
    };
  }

  renderCurrentSection() {
    const currentSection = this.props.nodo.map((item, index) => {
      if (this.props.currentTab === index) {
        return item;
      }
    });

    return currentSection;
  }

  render() {
    return (
      <div className={styles.content}>
        {this.renderCurrentSection()}
      </div>
    );
  }
}
