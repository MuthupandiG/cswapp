import { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from "../../util/utility.js";
import "./style.css";

export default function DynamicData() {
  const columns = ['id', 'name', 'email', 'website'];
  const [users, setUsers] = useState();
  const navigation = useNavigate();

  useEffect(() => {
    // If the user is already logged in, then navigate to home, when refreshing.
    if (!isUserLoggedIn()) {
      navigation('/');
    }
  }, []);

  useEffect(() => {
    // Fetching data from external server using fetch API
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setUsers(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);


  return (

    <div className="margin-30">
      { !users && <div className="table-conatiner">
            <Spinner animation="grow" /> <span>Loading...</span>
          </div>
      }
      { users && users.length > 0 &&
        <Table striped bordered hover>
          <thead>
            <tr>
            { 
              columns.map((column, index) => {
                return (<td key={index}>{column.toUpperCase()}</td>);
              })
            }
            </tr>
          </thead>
          <tbody>
            { users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      }
      </div>
  );
}