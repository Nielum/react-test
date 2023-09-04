import React, { Component } from 'react';

const url = 'https://jsonplaceholder.typicode.com/todos'

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPage: 1,
            itemsPerPage: 10,
            isLoading: true,
            error: null,
        };
    }

    componentDidMount() {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                this.setState({ data, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error, isLoading: false });
            });
    }

    componentWillUnmount() {
        if (this.controller) {
            this.controller.abort();
        }
    }

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    render() {
        const { data, currentPage, itemsPerPage, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((item) => (
            <div className="col-sm-4 " key={item.id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                    </div>
                </div>
            </div>
        ));

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className='container'>
                <h1>Data Fetcher</h1>
                <div className="row">
                    {renderItems}
                </div>
                <div className='container'>
                    Pagination
                    <ul className="pagination">
                        {pageNumbers.map((pageNumber) => (
                            <li
                                key={pageNumber}
                                className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => this.handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DataFetcher;
