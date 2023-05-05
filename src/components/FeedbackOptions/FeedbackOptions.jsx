import PropTypes from 'prop-types';
import { ButtonContainer, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonContainer>
            {options.map(option => (
                <OptionButton
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </OptionButton>
            ))}
        </ButtonContainer>
    );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};