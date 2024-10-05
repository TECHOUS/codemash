import ContributionGuidelines from './ContributionGuidelines.jsx';
import styles from './ContributionGuidelinesContainer.module.css';

const ContributionGuidelinesContainer = () => {
    return (
        <div className={styles.contributionGuidelinesContainer}>
            All the Contributions are welcome, you can check our{' '}
            <ContributionGuidelines />
        </div>
    );
};

export default ContributionGuidelinesContainer;
