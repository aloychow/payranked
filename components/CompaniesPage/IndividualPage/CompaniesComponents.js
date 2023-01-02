import React from "react";
import Rating from "@mui/material/Rating";
import MUIDataTable from "mui-datatables";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import {
    RatingStyled,
    RatingStyled2,
    ProgressBar,
    ProgressBarFilled,
    ChartStyled,
    DataTableStyled,
} from "./CompaniesElements";

// Stars
export const CompaniesRating = (props) => {
    return (
        <RatingStyled>
            <Rating name="read-only" value={props.value} precision={0.1} readOnly />
        </RatingStyled>
    );
};

export const CompaniesRating2 = (props) => {
    return (
        <RatingStyled2>
            <Rating size="small" value={props.value} precision={0.1} readOnly />
        </RatingStyled2>
    );
};

// Progress Bar
export const CompaniesProgressBar = (props) => {
    const percent = Math.round((props.value / 5) * 100);

    return (
        <ProgressBar>
            <ProgressBarFilled
                percent={percent}
                colorStart={props.colorStart}
                colorEnd={props.colorEnd}
            ></ProgressBarFilled>
        </ProgressBar>
    );
};

// Salary Barchart
function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    background: "white",
                    padding: "0.75rem",
                    border: "1px solid #D3D3D3",
                    borderRadius: "0.5rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
            >
                <p
                    className="label"
                    style={{ fontWeight: "600" }}
                >{`${payload[0].payload.range}`}</p>
                <p className="label" style={{ paddingTop: "0.25rem" }}>
                    Count: {`${payload[0].payload.count}`}
                </p>
            </div>
        );
    }

    return null;
}

export const CompaniesSalaryBarChart = (props) => {
    return (
        <ChartStyled>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <XAxis dataKey="range" />
                    <YAxis dataKey="count" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </ChartStyled>
    );
};

// Data Table
const options = {
    filterType: "dropdown",
    rowsPerPage: [10],
    rowsPerPageOptions: [5, 10, 20, 50, 100],
    selectableRows: false,
    jumpToPage: false,
    download: false,
    print: false,
    draggable: false,
    responsive: "standard",
};

export class CompaniesDataTable extends React.Component {
    render() {
        return (
            <DataTableStyled>
                <MUIDataTable
                    data={this.props.data}
                    columns={this.props.columns}
                    options={options}
                />
            </DataTableStyled>
        );
    }
}
