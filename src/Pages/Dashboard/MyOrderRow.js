import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ index, order, setDeleteOrder }) => {
    const { itemName, orderQuantity, totalPrice, _id, paid, transactionId } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>

            {
                paid ? <td><span className=' text-white text-sm bg-blue-700 px-4 py-1 rounded'>Paid</span></td> : <td><Link className to={`/payment/${_id}`}><button className='btn btn-success btn-xs px-5 rounded-md text-white'>Pay</button></Link></td>
            }
            {
                paid ? <td><span>{transactionId}</span></td> : <td>------</td>
            }

            {
                !paid ? <td onClick={() => setDeleteOrder(order)}>
                    <label htmlFor="my-order-modal" className=" btn bg-red-400 border-0 btn-xs rounded-lg  modal-button">
                        <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
                    </label> </td>
                    :
                    <td></td>
            }
        </tr>
    );
};

export default MyOrderRow;