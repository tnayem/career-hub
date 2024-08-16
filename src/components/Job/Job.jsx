import { CiDollar } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className="flex">
                    <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2" />{location}</h2>
                    <h2 className="flex"><CiDollar className="text-2xl mr-2" />{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;