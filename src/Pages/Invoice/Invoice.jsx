import { useEffect, useState } from "react";
import HeaderTitle from "../../Components/Shared/HedaerTitle/HeaderTitle";
import axios from "axios";
import './styles.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Invoice = () => {
    const [invoices, setInvoices] = useState([])
    const [itemsPerpage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)

    const numOfPages = Math.ceil((invoices.length) / itemsPerpage)
    const pages = [...Array(numOfPages).keys()]
    useEffect(() => {
        axios.get("/invoice.json")
            .then(response => {
                console.log(response.data)
                setInvoices(response.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    console.log(typeof itemsPerpage)
    const handlePerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const indexOfLastInvoice = currentPage * itemsPerpage;
    const indexOfFirstInvoice = indexOfLastInvoice - itemsPerpage;
    const currentInvoices = invoices.slice(indexOfFirstInvoice, indexOfLastInvoice);

    return (
        <div className="px-10">
            <HeaderTitle title={'Invoices'}></HeaderTitle>
            <div>
                <div>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="code" placeholder="type client code" className="input input-bordered ml-2" required />
                </div>
                <div>

                </div>
                <div>
                    <div>
                        <div>
                            <label htmlFor="">Display</label>
                            <select value={itemsPerpage} className="ml-2 px-4 py-2 rounded-md border-2" onChange={handlePerPage}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div>
                            <p>Page {currentPage} of {numOfPages}</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>invoice_number</th>
                                        <th>client_code</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Total</th>
                                        <th>Paid</th>
                                        <th> Status</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentInvoices?.map(invoice => <tr key={invoice.client_code}>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>Quality Control Specialist</td>
                                            <td>Blue</td>
                                        </tr>)
                                    }
                                   
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="pagination flex items-center gap-4">
                        <div onClick={handlePrevPage}>
                            <MdKeyboardArrowLeft size={20} />
                        </div>
                        {
                            pages?.map((page) => <button key={page} className={`px-2 py-1 rounded-lg ${currentPage == page && 'selected'}`} onClick={() => setCurrentPage(page)}>{page}</button>)
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

export default Invoice;