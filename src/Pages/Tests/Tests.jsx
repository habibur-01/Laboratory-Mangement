
import axios from "axios";
import HeaderTitle from "../../Components/Shared/HedaerTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Tests = () => {
    const [tests, setTests] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentTests, setCurrentTests] = useState([])

    useEffect(() => {
        axios.get("/tests.json")
            .then(response => {
                console.log(response.data)
                setTests(response.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handlePerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value))
        setCurrentPage(1) // Reset current page to 1 when changing items per page
    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < Math.ceil(tests.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        const indexOfLastInvoice = currentPage * itemsPerPage;
        const indexOfFirstInvoice = indexOfLastInvoice - itemsPerPage;
        const invoicesData = tests.slice(indexOfFirstInvoice, indexOfLastInvoice);
        setCurrentTests(invoicesData)
    }, [tests, itemsPerPage, currentPage])

    const handleSearch = (e) => {

        setCurrentPage(1);

        // Filter invoices based on search term
        const filteredInvoices = tests.filter(test => test.test_id.includes(e.target.value));
        setCurrentTests(filteredInvoices);
    };

    return (
        <div>
            <HeaderTitle title={'tests'}></HeaderTitle>
            <div>
                <div>
                    <form >
                        <div>
                            <label htmlFor="search">Search:</label>
                            <input type="text" name="code" placeholder="type client code" className="input input-bordered ml-2" required onChange={handleSearch} />
                        </div>
                    </form>
                </div>
                <div className="py-10">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead className="">
                                <tr>

                                    <th>Test Code</th>
                                    <th>Test Name</th>
                                    <th>Description</th>
                                    <th>Sample Type</th>
                                    <th>Turn Around Time</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentTests.map((test) => (
                                        <tr key={test.test_id} className="py-4">

                                            <td>{test.test_id}</td>
                                            <td>{test.name}</td>
                                            <td>{test.description}</td>
                                            <td>{test.sample_type}</td>
                                            <td>{test.turnaround_time}</td>

                                           

                                            <td className="flex gap-2">
                                                <button className="btn btn-xs btn-warning ">Delete</button>
                                                <button className="btn btn-xs btn-primary">Update</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-5 items-center">
                        <div>
                            <label htmlFor="" className="text-sm">Display</label>
                            <select value={itemsPerPage} className="ml-2 px-2 py-1 rounded-md border-2" onChange={handlePerPage}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-sm opacity-85">Page {currentPage} of {Math.ceil(tests.length / itemsPerPage)}</p>
                        </div>
                    </div>

                    <div className="pagination flex items-center gap-4">
                        <div onClick={handlePrevPage}>
                            <MdKeyboardArrowLeft size={20} />
                        </div>
                        {
                            Array.from({ length: Math.ceil(tests.length / itemsPerPage) }, (_, i) => (
                                <button key={i + 1} className={`px-2 py-1 rounded-lg ${currentPage === i + 1 && 'selected'}`} onClick={() => setCurrentPage(i + 1)}>
                                    {i + 1}
                                </button>
                            ))
                        }
                        <div onClick={handleNextPage}>
                            <MdKeyboardArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tests;