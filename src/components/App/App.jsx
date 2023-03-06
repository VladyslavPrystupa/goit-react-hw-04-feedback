import { useState } from 'react';
import { Section } from '../Section/Section';
import { GlobalStyle } from './GlobalStyles';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((good * 100) / countTotalFeedback());
  };

  const checkFeedbacks = () => {
    return [good, neutral, bad].every(value => value === 0);
  };

  return (
    <>
      <GlobalStyle />

      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      {checkFeedbacks() ? (
        <Section>
          <Notification message={'There is no feedback'} />
        </Section>
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </>
  );
};

// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
// return Object.values(this.state).reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Number.parseInt((this.state.good * 100) / this.countTotalFeedback());
//   };

// checkFeedbacks = () => {
//   return Object.values(this.state).every(value => value === 0);
// };

//   render() {
//     const keys = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <GlobalStyle />

//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
//         </Section>
//         {this.checkFeedbacks() ? (
//           <Section>
//             <Notification message={'There is no feedback'} />
//           </Section>
//         ) : (
//           <Section title={'Statistics'}>
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           </Section>
//         )}
//       </>
//     );
//   }
// }
