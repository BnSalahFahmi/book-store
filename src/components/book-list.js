import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
library.add(faSort);
library.add(faSortUp);
library.add(faSortDown);

const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <FontAwesomeIcon icon='sort-up' />
        );
    }

    if (direction === 'desc') {
        return (
            <FontAwesomeIcon icon='sort-down' />
        );
    }

    return (
        <FontAwesomeIcon icon='sort' />
    );
};

function imageFormatter(cell, row) {
    return "<img src='" + cell + "'/>";
}

export default class BooksList extends React.Component {

    constructor(props) {
        super(props);
        this.options = {
            page: 1,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.props.length
            }],
            sizePerPage: 5,
            pageStartIndex: 1,
            paginationSize: 10,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            paginationShowsTotal: this.renderShowsTotal,
            paginationPosition: 'bottom',
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };
    }

    render() {
        return (
            <div className="container">
                <BootstrapTable version='4' pagination data={this.props.books} selectRow={this.selectRowProp} options={this.options} striped hover condensed>
                    <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="id"
                        dataSort={true}
                        caretRender={getCaret}
                        filter={{ type: 'TextFilter', delay: 0 }}
                        columnTitle
                    >
                        ID
                </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="name"
                        dataSort={true}
                        caretRender={getCaret}
                        filter={{ type: 'TextFilter', delay: 0 }}
                        columnTitle
                    >
                        Name
                </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="author"
                        dataSort={true}
                        caretRender={getCaret}
                        filter={{ type: 'TextFilter', delay: 0 }}
                        columnTitle
                    >
                        Author
                </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="description"
                        dataSort={true}
                        caretRender={getCaret}
                        filter={{ type: 'TextFilter', delay: 0 }}
                        columnTitle
                    >
                        Description
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField="photo"
                        dataSort={true}
                        caretRender={getCaret}
                        filter={{ type: 'TextFilter', delay: 0 }}
                        dataFormat={imageFormatter}>
                        Photo
                    </TableHeaderColumn>

                </BootstrapTable>
            </div>
        )
    }
}