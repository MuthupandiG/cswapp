import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { isUserLoggedIn } from "../../util/utility.js";
import "./style.css";

export default function StaticData() {
  const navigation = useNavigate();

  useEffect(() => {
    // If the user is already logged in, then navigate to home, when refreshing.
    if (!isUserLoggedIn()) {
      navigation('/');
    }
  }, []);

    return (
      <div className="table-conatiner">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Muthu</td>
              <td>Pandi</td>
              <td>@mpandi</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Muthu</td>
              <td>Raja</td>
              <td>@mraja</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Muthu</td>
              <td>Vel</td>
              <td>@mvel</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }