import { PropTypes } from "prop-types"
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const InvoiceTable = ({ invoice, heading }) => {
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentInvoices, setCurrentInvoices] = useState([])
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
        if (currentPage < Math.ceil(invoice.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        const indexOfLastInvoice = currentPage * itemsPerPage;
        const indexOfFirstInvoice = indexOfLastInvoice - itemsPerPage;
        const invoicesData = invoice.slice(indexOfFirstInvoice, indexOfLastInvoice);
        setCurrentInvoices(invoicesData)
    }, [invoice, itemsPerPage, currentPage])

    const handleSearch = (e) => {

        setCurrentPage(1);

        // Filter invoices based on search term
        const filteredInvoices = invoice.filter(invoice => invoice.client_code.includes(e.target.value));
        setCurrentInvoices(filteredInvoices);
    };
    return (
        <div>
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
                                    {
                                        heading?.map((title, index)=> <th key={index}>{title}</th>)
                                    }
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentInvoices.map(invoice => (
                                        <tr key={invoice.client_code} className="py-4">
                                            <td>{invoice.invoice_number}</td>
                                            <td>{invoice.client_code}</td>
                                            <td>{invoice.customer.name}</td>
                                            <td>{invoice.customer.email}</td>
                                            <td>{invoice.total}</td>
                                            <td>{invoice.paid}</td>
                                            <td>{invoice.status}</td>
                                            <td>
                                                <button className="btn btn-xs btn-warning mr-2">Delete</button>
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
                            <p className="text-sm opacity-85">Page {currentPage} of {Math.ceil(invoice.length / itemsPerPage)}</p>
                        </div>
                    </div>

                    <div className="pagination flex items-center gap-4">
                        <div onClick={handlePrevPage}>
                            <MdKeyboardArrowLeft size={20} />
                        </div>
                        {
                            Array.from({ length: Math.ceil(invoice.length / itemsPerPage) }, (_, i) => (
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
InvoiceTable.propTypes = {
    invoice: PropTypes.any,
    heading: PropTypes.array
}
export default InvoiceTable;