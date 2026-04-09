import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "./studentSlice";
import { useNavigate } from "react-router-dom";

export default function ListStudent() {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2><span className="accent-text">S+</span> Student List</h2>
      <button onClick={() => navigate("/")} style={{ marginBottom: 20 }}>+ Add New Student</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr><td colSpan="4" style={{ textAlign: "center" }}>No data available</td></tr>
          ) : (
            students.map(s => (
              <tr key={s.id}>
                <td>{s.nama}</td>
                <td>{s.kelas}</td>
                <td>{s.alamat}</td>
                <td>
                  <button className="btn-update" onClick={() => navigate(`/update/${s.id}`)}>Edit</button>
                  <button className="btn-delete" onClick={() => dispatch(removeStudent(s.id))}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}