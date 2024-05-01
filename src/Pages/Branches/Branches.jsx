
import axios from "axios";
import HeaderTitle from "../../Components/Shared/HedaerTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Branches = () => {
    const [branches, setBranches] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentBranches, setCurrentBranches] = useState([])

    useEffect(() => {
        axios.get("/branches.json")
            .then(response => {
                console.log(response.data)
                setBranches(response.data)
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
        if (currentPage < Math.ceil(branches.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        const indexOfLastInvoice = currentPage * itemsPerPage;
        const indexOfFirstInvoice = indexOfLastInvoice - itemsPerPage;
        const invoicesData = branches.slice(indexOfFirstInvoice, indexOfLastInvoice);
        setCurrentBranches(invoicesData)
    }, [branches, itemsPerPage, currentPage])

    const handleSearch = (e) => {

        setCurrentPage(1);

        // Filter invoices based on search term
        const filteredInvoices = branches.filter(branch => branch.branch_id.includes(e.target.value));
        setCurrentBranches(filteredInvoices);
    };

    return (
        <div>
            <HeaderTitle title={'branches'}></HeaderTitle>
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

                                    <th>Branch Code</th>
                                    <th>Branch Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>services</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentBranches.map((branch) => (
                                        <tr key={branch.branch_id} className="py-4">

                                            <td>{branch.branch_id}</td>
                                            <td>{branch.name}</td>
                                            <td>{branch.location}</td>
                                            <td>{branch.phone}</td>
                                            <td>{branch.email}</td>

                                            <td>{branch.services.map((service, index) => <p key={index}>{service}</p>)}</td>

                                            <td className="flex gap-2">
                                                <button className="btn btn-xs btn-warning">Delete</button>
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
                            <p className="text-sm opacity-85">Page {currentPage} of {Math.ceil(branches.length / itemsPerPage)}</p>
                        </div>
                    </div>

                    <div className="pagination flex items-center gap-4">
                        <div onClick={handlePrevPage}>
                            <MdKeyboardArrowLeft size={20} />
                        </div>
                        {
                            Array.from({ length: Math.ceil(branches.length / itemsPerPage) }, (_, i) => (
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

export default Branches;