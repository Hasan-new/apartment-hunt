import React from 'react';

const SingleMyRent = (props) => {
    const {title, price, previousId} = props.data;
    return (
        <tr>
            <td className="user_name">{title}</td>
            <td>${price}</td>
            <td className="text-center"><button className="rent_btn">View Details</button></td>
        </tr>
    );
};

export default SingleMyRent;