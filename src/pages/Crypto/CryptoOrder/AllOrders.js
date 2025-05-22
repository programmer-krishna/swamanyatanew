import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import TableContainer from '../../../Components/Common/TableContainer';
import {
    Type,
    Quantity,
    OrderValue,
    AvgPrice,
    Price,
    Status
} from './OrderCol';

const AllOrders = ({ orderList }) => {
    const columns = useMemo(
        () => [
            {
                header: "Date",
                accessorKey: "date",
                enableColumnFilter: false,
                cell: (cell) => (
                    <>
                        {cell.getValue()}{" "}
                        <small className="text-muted">{cell.row.original.time}</small>
                    </>
                ),
            },
            {
                header: "Name",
                accessorKey: "coinName",
                enableColumnFilter: false,
                cell: (cell) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={cell.row.original.img} alt="" className="avatar-xxs" />
                            </div>
                            <Link to="#" className="currency_name flex-grow-1 ms-2">{cell.getValue()}</Link>
                        </div>
                    </>
                ),
            },
            {
                header: "Type",
                accessorKey: "type",
                enableColumnFilter: false,
                cell: (cell) => {
                    return <Type {...cell} />;
                },
            },
            {
                header: "Quantity",
                accessorKey: "quantity",
                enableColumnFilter: false,
                cell: (cell) => {
                    return <Quantity {...cell} />;
                },
            },
            {
                header: "Order Value",
                accessorKey: "orderValue",
                enableColumnFilter: false,
                cell: (cell) => {
                    return <OrderValue {...cell} />;
                },
            },
            {
                header: "Avg Price",
                accessorKey: "avgPrice",
                enableColumnFilter: false,
                cell: (cell) => {
                    return <AvgPrice {...cell} />;
                },
            },
            {
                header: "Price",
                accessorKey: "price",
                enableColumnFilter: false,
                cell: (cell) => {
                    return <Price {...cell} />;
                },
            },
            {
                header: "Status",
                accessorKey: "status",
                enableColumnFilter: false,
                cell: (cell) => {
                    return <Status {...cell} />;
                },
            },
        ],
        []
    );
    return (
        <React.Fragment>
        
        </React.Fragment>
    );
};

export default AllOrders;