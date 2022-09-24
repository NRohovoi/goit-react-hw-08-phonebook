import PropTypes from 'prop-types';
import { StatSection, Title, StatList, StatListItem, StatListContent } from './statistics.styled';


const Statistiks = ({ title, stats }) => {
    return (
        <StatSection>
        {title && <Title>{title}</Title>}    
        {stats && <StatList>
            {stats.map(({ id, label, percentage }) => {
                const colorItem = {
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`,
                };
                return (
                    <StatListItem style={colorItem} key={id}>
                    <span>{label} </span>
                    <StatListContent>{percentage}%</StatListContent>
                    </StatListItem>
                )
            }
            )} 
        </StatList>}
        </StatSection>
    )
};

Statistiks.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
    ),
};

export default Statistiks;