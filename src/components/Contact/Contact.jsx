import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const List = ({ data: { id, name, number }, onDelete }) => {
    return (
            <div className={s.list}>
            <p>
                <FaUserAlt className={s.icon} /> {name}
            </p>
            <p>
                <FaPhone className={s.icon} /> {number}
            </p>
            <button className={s.bth} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

List.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    onDelete:PropTypes.func.isRequired,
};

export default List;