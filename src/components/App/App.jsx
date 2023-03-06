import { Component } from 'react';
import { Section } from '../Section/Section';
import { GlobalStyle } from './GlobalStyles';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt((this.state.good * 100) / this.countTotalFeedback());
  };

  handleClick = e => {
    const { value } = e.currentTarget;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  checkFeedbacks = () => {
    return Object.values(this.state).every(value => value === 0);
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <GlobalStyle />

        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
        </Section>
        {this.checkFeedbacks() ? (
          <Section>
            <Notification message={'There is no feedback'} />
          </Section>
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
