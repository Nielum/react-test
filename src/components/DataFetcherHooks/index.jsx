import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher_Hooks() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect(() => {
        const apiUrl = 'https://fakestoreapi.com/products';

        axios.get(apiUrl)
            .then((response) => {
                setData(response.data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container">
            <h1>Data Fetcher Hooks</h1>
            {loading ? (
                <div className='d-flex justify-align-center'>Loading...</div>
            ) : error ? (
                <div className="text-danger">Error: {error.message}</div>
            ) : (
                <div className='mt-4'>
                    <ul className="list-group list-group-item-primary">
                        {currentProducts.map((item, index) => (
                            <li key={item.id} className={`list-group-item ${index % 2 == 0 ? 'list-group-item-primary' : 'list-group-item-secondary'}`}>
                                {index + 1}. {item.title}
                            </li>
                        ))}
                    </ul>
                    <nav>
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: Math.ceil(data.length / productsPerPage) }).map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )
            }
        </div >
    );
}

export default DataFetcher_Hooks;
