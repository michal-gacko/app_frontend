import React from 'react';

import {columns} from './columns';

import get from "../../components/DataTable/get";
import post from "./add";

import DataTable from "../../components/DataTable";

export default function User() {
    return (
        <DataTable
            title={"Užívatelia"}
            columns={columns}
            url={'/users/users/'}
            data={get}
            add={post}
        />
    );
}

