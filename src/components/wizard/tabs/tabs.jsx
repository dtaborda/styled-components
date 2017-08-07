import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from 'views/shared/button';
import styled from 'styled-components';

const Card = styled.div`
  background-color: $gray-xs;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  &::hover {

  }

  &::before {
    border: solid transparent;
    content: " ";
    position: absolute;
    border-left-color: $gray-xxs;
    border-width: 25px 0 25px 25px;
    margin-left: 0;
    top: 0;
    align-self: flex-start;
  }

  &::after {
    border: solid $gray-xxs;
    content: " ";
    position: absolute;
    border-left-color: $gray-xs;
    border-width: 25px 0 25px 25px;
    margin-left: 0;
    top: 0;
    align-self: flex-end;
  }
`;

const Label = styled.label`
  color: $gray-xxl;
  font-size: 14px;
  text-transform: uppercase;
`

const TabContainer = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
`

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const WizardContainer = styled.div`
  flex: 1;
`

const WizardContainer = styled.div`
  background-color: #EEE;
  padding: 16px;
`

const Current = styled.div`
  background-color: $gray-xxl;
  .label {
    color: $white;
  }

  &::after {
    border-left-color: $gray-xxl;
  }
`




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
      <Card>
        <Label>{this.props.label}</Label>
      </Card>
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
          <TabContainer key={tab.id}>
            <Tab
              className={classNames(this.props.currentTabIndex >= tab.id ? styles.current : null, tab.className)}
              label={tab.label}
            />
          </TabContainer>
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
        <WizardContainer>
          <TabsContainer>
            {this.renderTabs()}
          </TabsContainer>
          <div className={styles.tabContent}>
            {this.props.children}
          </div>
        </WizardContainer>
        <Button type='link' onClick={this.handleChangeTab.bind(this, inc)} >
          {'>>'}
        </Button>
      </div>
    );
  }
}
