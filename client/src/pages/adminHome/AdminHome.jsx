import { useEffect, useState } from "react";
import instance from "../../config/instance";
export default function AdminHome() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getAllcustomers = async () => {
      try {
        const response = await instance.get("/customer/customers");
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
            <th scope="col">C_name</th>
            <th scope="col">C_number</th>
            <th scope="col">C_email</th>
            <th scope="col">R_service</th>
            <th scope="col">R_Product</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{customer.companyName}</td>
              <td>{`${customer.phoneNumber}`}</td>
              <td>{customer.companyEmail}</td>
              <td>{customer.requiredService}</td>
              <td>{customer.requiredProduct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
