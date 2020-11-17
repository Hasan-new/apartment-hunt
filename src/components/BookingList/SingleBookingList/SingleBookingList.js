import React, { useState } from 'react';

const SingleBookingList = (props) => {
    const {fullname, email, phone, message, status} = props.data;

    return (
        <tr>
            <td className="user_name">{fullname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{message}</td>
            <td>
                <select>
                    <option className="text-danger" value="Pending">Pending</option>
                    <option className="text-warning" value="On going">On going</option>
                    <option className="text-success" value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default SingleBookingList;