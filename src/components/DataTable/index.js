import React from 'react';
import MaterialTable from 'material-table';
import {Box} from "@mui/material";
import {localization} from "./localization";
import {Options} from './options';
import {tableIcons} from "./tableIcons";
import url from "../DataTable/url";
import DataTableErrorMessage from "./DataTableErrorMessage";

class DataTable extends React.Component {
    tableRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            selectedRow: null,
            message: null,
        };
    }

    async display(result) {
        let a = result
            .then(function (response) {
                return {
                    response,
                }
            })
            .catch(function (error) {
                return error;
            });
        let b = await a;
        this.setState({message: b.response})
    }

    render() {
        return (
            <div>
                <DataTableErrorMessage
                    message={this.state.message}
                />
                <Box mt={3}>
                    <MaterialTable
                        icons={!this.props.TableIcons ? tableIcons : this.props.TableIcons}
                        columns={this.props.columns}
                        title={this.props.title}
                        data={
                            query => {
                                if (this.state.message) {
                                    this.setState({message: null})
                                }
                                return this.props.data(query, url(query, this.props.url))
                            }
                        }
                        onRowClick={
                            ((evt, selectedRow) => this.setState({
                                selectedRow: selectedRow.tableData.id
                            }))
                        }
                        editable={{
                            onRowAdd: this.props.add && localStorage.getItem("access_token") ? newData => {
                                const result = this.props.add(newData, this.props);
                                this.display(result);
                                return result;
                            } : null,
                            onRowUpdate: this.props.edit && localStorage.getItem("access_token") ? (newData, oldData) => {
                                const result = this.props.edit(newData, this.props)
                                this.display(result);
                                return result;
                            } : null,
                            onRowDelete: this.props.remove && localStorage.getItem("access_token") ? oldData => this.props.remove(this.props.url + oldData.id + "/") : null

                        }}
                        options={Object.assign({}, Options(),
                            {
                                rowStyle: rowData => ({
                                    backgroundColor: (this.state.selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                                })
                            }
                        )}
                        tableRef={this.tableRef}
                        localization={localization}
                        style={{padding: 5}}
                    />
                </Box>
            </div>
        );
    }
}

export default DataTable;

