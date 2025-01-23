import PropTypes from 'prop-types';
import s from './SearchBox.module.css'

const SearchBox = ({ value, onFilter }) => {
    return (
        <div className={s.form}>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} placeholder="Type a name to search..." />
        </div>
    );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired, 
    onFilter: PropTypes.func.isRequired, 
};

export default SearchBox;