import { CLOSE_SCORE_REACTION_BOARD } from '../../hooks/useSearchSectionReducer.js';
import PropTypes from 'prop-types';
import ScoreReactionBoardPresenter from './ScoreReactionBoardPresenter.jsx';
import { useCallback } from 'react';

const ScoreReactionBoardContainer = ({ searchSectionDispatch }) => {
    const closeScoreReactionBoard = useCallback(() => {
        searchSectionDispatch({
            type: CLOSE_SCORE_REACTION_BOARD,
        });
    }, [searchSectionDispatch]);

    const scoreReactionBoardList = [
        {
            label: 'Less than -8000',
            score: -8500,
        },
        {
            label: 'Between -8000 and -7000',
            score: -7500,
        },
        {
            label: 'Between -7000 and -6000',
            score: -6500,
        },
        {
            label: 'Between -6000 and -5000',
            score: -5500,
        },
        {
            label: 'Between -5000 and -4000',
            score: -4500,
        },
        {
            label: 'Between -4000 and -3000',
            score: -3500,
        },
        {
            label: 'Between -3000 and -2000',
            score: -2500,
        },
        {
            label: 'Between -2000 and -1000',
            score: -1500,
        },
        {
            label: 'Between -1000 and 0',
            score: -500,
        },
        {
            label: 'Between 0 and 1000',
            score: 500,
        },
        {
            label: 'Between 1000 and 2000',
            score: 1500,
        },
        {
            label: 'Between 2000 and 3000',
            score: 2500,
        },
        {
            label: 'Between 3000 and 4000',
            score: 3500,
        },
        {
            label: 'Between 4000 and 5000',
            score: 4500,
        },
        {
            label: 'Between 5000 and 6000',
            score: 5500,
        },
        {
            label: 'Between 6000 and 7000',
            score: 6500,
        },
        {
            label: 'Between 7000 and 8000',
            score: 7500,
        },
        {
            label: 'Between 8000 and 9000',
            score: 8500,
        },
        {
            label: 'Between 9000 and 10000',
            score: 9500,
        },
        {
            label: 'Greater than 10000',
            score: 10500,
        },
    ];

    return (
        <ScoreReactionBoardPresenter
            closeScoreReactionBoard={closeScoreReactionBoard}
            scoreReactionBoardList={scoreReactionBoardList}
        />
    );
};

ScoreReactionBoardContainer.propTypes = {
    searchSectionDispatch: PropTypes.func,
};

export default ScoreReactionBoardContainer;
