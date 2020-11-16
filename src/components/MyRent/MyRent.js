import React from 'react';
import './MyRent.css';
import logo from '../../images/logos/Logo.png';
import booking_photo from '../../images/logos/map-marker-alt-solid 1.png';
import add_house from '../../images/logos/plus 1.png';
import my_rent from '../../images/logos/Rent.png';

const MyRent = () => {
    return (
        <div className="user-page">
            <div className="userPageLeftSide">
                {/* <Link to='/'> */}
                    <img className="userPageLogo" src={logo} alt=""/>
                {/* </Link> */}
                <div className="user-page-link">
                    {/* <Link className="userPageLink orderLink color-active" to='/admin/service-list'> */}
                        <div className="d-flex justify-content-left dashboard_link align-items-center my-3">
                            <img className="dashboard_logo" src={booking_photo} alt=""/>
                            <p className="mx-0 my-0 ml-2">Booking list</p>
                        </div>
                    {/* </Link> */}
                    {/* <Link className="serviceListLink inactive-color" to="/admin/add-service"> */}
                        <div className="d-flex justify-content-left dashboard_link align-items-center my-3">
                            <img className="dashboard_logo" src={add_house} alt=""/>
                            <p className="mx-0 my-0 ml-2">Add Rent House</p>
                        </div>
                    {/* </Link> */}
                    {/* <Link className="reviewLink inactive-color" to="/admin/add-admin"> */}
                        <div className="d-flex justify-content-left active_link align-items-center my-3">
                            <img className="dashboard_logo" src={my_rent} alt=""/>
                            <p className="mx-0 my-0 ml-2">My Rent</p>
                        </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="userPageRightSide">
                <h3 className="rightSideListText">My Rent</h3>
                <div className="rightSideMain row">
                    <table>
                        <thead>
                            <tr>
                                <th style={{padding: '10px 10px 10px 20px', borderRadius: '10px 0 0 10px', width: '250px'}}>House Name</th>
                                <th style={{width: '170px'}}>Price</th>
                                <th style={{width: '160px', textAlign: 'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="user_name">Washington Avenue</td>
                            <td>$300</td>
                            <td className="text-center"><button className="rent_btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td className="user_name">Washington Avenue</td>
                            <td>$300</td>
                            <td className="text-center"><button className="rent_btn">View Details</button></td>
                        </tr>
                            {/* {
                                orderedData.length === 0 && <button className="btn btn-primary m-auto" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                                </button>
                            }
                            {
                                orderedData.map(data => <AdminServiceData key={data._id} details={data}></AdminServiceData>)
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRent;