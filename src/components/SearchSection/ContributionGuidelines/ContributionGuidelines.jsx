import styles from './ContributionGuidelines.module.css';

const ContributionGuidelines = () => {
    return (
        <div>
            <a
                href="https://github.com/TECHOUS/codemash/blob/master/.github/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
            >
                <i
                    className={`fa-solid fa-up-right-from-square ${styles.icon}`}
                ></i>{' '}
                Contribution Guidelines
            </a>
        </div>
    );
};

export default ContributionGuidelines;
