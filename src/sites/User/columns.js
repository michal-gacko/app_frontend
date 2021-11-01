import notEmpty from "../../components/DataTable/validation";
import React from "react";

export const columns = [
    {
        title: "Užívateľské meno",
        field: 'username',
        validate: rowData => notEmpty(rowData.username),
        cellStyle: {width: "30%"}
    },
    {
        title: "Heslo",
        field: 'password',
        filtering: false,
        sorting: false,
        render: rowData => <div>********</div>,
        cellStyle: {width: "30%"}
    },
    {
        title: "Rola",
        field: 'type',
        editable: 'never'
    },
]
