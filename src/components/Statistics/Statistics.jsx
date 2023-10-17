import css from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.statistics}>
            <h2>Statistics</h2>
            {total > 0 ? (
                <div>
                    <p>good: {good}</p>
                    <p>neutral: {neutral}</p>
                    <p>bad: {bad}</p>
                    <p>Positive Percentage: {positivePercentage}</p>
            </div>
            ) : (
                    <p className={css.noFeedback}>There is no feedback</p>
            )}
        </div>

    );
};
export default Statistics;