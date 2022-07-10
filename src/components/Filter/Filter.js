import PropTypes from 'prop-types';
import s from './Filter.module.css'

const Filter = ({ value, onChange }) => {
    return (
        <label className={s.label}> Find contacts by name
            <input
                type="text"
                value={value}
                onChange={onChange}
                className={s.input}
            />
        </label>
    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};