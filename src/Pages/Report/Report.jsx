import axios from "axios";
import HeaderTitle from "../../Components/Shared/HedaerTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Report = () => {
    const [reports, setReports] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentReports, setCurrentReports] = useState([])
    
    useEffect(() => {
        axios.get("/reports.json")
            .then(response => {
                console.log(response.data)
                setReports(response.data)
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
        if (currentPage < Math.ceil(reports.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        const indexOfLastInvoice = currentPage * itemsPerPage;
        const indexOfFirstInvoice = indexOfLastInvoice - itemsPerPage;
        const invoicesData = reports.slice(indexOfFirstInvoice, indexOfLastInvoice);
        setCurrentReports(invoicesData)
    }, [reports, itemsPerPage, currentPage])

    const handleSearch = (e) => {

        setCurrentPage(1);

        // Filter invoices based on search term
        const filteredInvoices = reports.filter(invoice => invoice.patient_id.includes(e.target.value));
        setCurrentReports(filteredInvoices);
    };
   
    return (
        <div>
            <HeaderTitle title={'Reports'}></HeaderTitle>
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
                                    
                                    <th>Client Code</th>
                                    <th>Client Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Doctor Name</th>
                                    <th>Diagnosis</th>
                                    <th>Prescription</th>
                                    <th>Date</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentReports.map((invoice) => (
                                        <tr key={invoice.client_code} className="py-4">
                                            
                                            <td>{invoice.patient_id}</td>
                                            <td>{invoice.name}</td>
                                            <td>{invoice.age}</td>
                                            <td>{invoice.gender}</td>
                                            <td>{invoice.doctor}</td>
                                            <td>{invoice.diagnosis}</td>
                                            <td>{invoice.prescription.medication},<br/>{invoice.prescription.dosage},<br/>{invoice.prescription.frequency},<br/> {invoice.prescription.duration}</td>
                                            <td>{invoice.date}</td>
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
                            <p className="text-sm opacity-85">Page {currentPage} of {Math.ceil(reports.length / itemsPerPage)}</p>
                        </div>
                    </div>

                    <div className="pagination flex items-center gap-4">
                        <div onClick={handlePrevPage}>
                            <MdKeyboardArrowLeft size={20} />
                        </div>
                        {
                            Array.from({ length: Math.ceil(reports.length / itemsPerPage) }, (_, i) => (
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

export default Report;