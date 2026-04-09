import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !kelas || !alamat) return alert("Isi semua field!");
    dispatch(addStudent(nama, kelas, alamat));
    navigate("/list");
  };

  return (
    <div className="card">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nama Lengkap" value={nama} onChange={e => setNama(e.target.value)} />
        <input placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} />
        <input placeholder="Alamat" value={alamat} onChange={e => setAlamat(e.target.value)} />
        <button type="submit">Save Data</button>
        <button type="button" onClick={() => navigate("/list")} style={{background: "#7f8c8d"}}>View List</button>
      </form>
    </div>
  );
}