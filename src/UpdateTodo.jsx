import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "./studentSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector(state => state.students.find(s => s.id === id));

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (student) {
      setNama(student.nama);
      setKelas(student.kelas);
      setAlamat(student.alamat);
    }
  }, [student]);

  if (!student) return <div className="card"><h2>Student not found!</h2><button onClick={() => navigate("/list")}>Back</button></div>;

  const handleUpdate = () => {
    dispatch(updateStudent({ id, nama, kelas, alamat }));
    navigate("/list");
  };

  return (
    <div className="card">
      <h2>Edit Student</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} />
        <input placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} />
        <input placeholder="Alamat" value={alamat} onChange={e => setAlamat(e.target.value)} />
        <button onClick={handleUpdate}>Update & Save</button>
        <button onClick={() => navigate("/list")} style={{background: "#95a5a6"}}>Cancel</button>
      </div>
    </div>
  );
}