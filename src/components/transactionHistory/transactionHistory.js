import PropTypes from 'prop-types';

import{ TransactionTable, TransactionTableHead, TransactionTableHeadLine, TransactionTableLine, TransactionTableCell } from './transactionHistory.styled';

const TransactionHistory = ({items}) => {
    return (
        <TransactionTable>
            <TransactionTableHead>
                <TransactionTableHeadLine>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </TransactionTableHeadLine>
            </TransactionTableHead>
            <tbody>
            {items.map(({ id, type, amount, currency}) => {
                return (
                <TransactionTableLine key={id}>
                    <TransactionTableCell>{type}</TransactionTableCell>
                    <TransactionTableCell>{amount}</TransactionTableCell>
                    <TransactionTableCell>{currency}</TransactionTableCell>
                </TransactionTableLine>
                )
            }
            )}
            </tbody>
        </TransactionTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    })
    ),
}

export default TransactionHistory;