import { useEffect, useState } from "react";
import instance from "../../config/instance";
export default function AdminHome() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getAllcustomers = async () => {
      try {
        const response = await instance.get("/customer/customers");
        console.log(" customers : ", response.data);
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllcustomers();
  }, []);
  return (
    <div className="container overflow-scroll p-4  d-flex ">
      <table className="table  ">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">company name</th>
            <th scope="col">company Email</th>
            <th scope="col">NUM of Invoces</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{customer.name}</td>
              <td>{`${customer.countryCode} ${customer.phoneNumber}`}</td>
              <td>{customer.companyName}</td>
              <td>{customer.companyEmail}</td>
              <td>{customer.numberOfInvoices}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
