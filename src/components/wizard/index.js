import React, { Component, PropTypes } from 'react';
import Tabs from './tabs';
import Content from './content';

export default class Detail extends Component {
  static get propTypes() {
    return {
      tabs: PropTypes.array.isRequired,
      children: PropTypes.node.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: 0
    };
  }

  handleChangeTab(tab) {
    this.setState({
      currentTabIndex: tab.id
    });
  }

  render() {
    return  (
      <Tabs
        onChangeTab={this.handleChangeTab.bind(this)}
        categoriesTabs={this.props.tabs}
        currentTabIndex={this.state.currentTabIndex}
      >
        <Content
          nodo={this.props.children.props.children}
          currentTab={this.state.currentTabIndex}
        />
      </Tabs>
    );
  }
}
