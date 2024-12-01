import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManageBooks.css";

const ManageBooks = () => {
    const navigate = useNavigate();

    return (
        <div className="manage-books-container">
            <h2>Manage Books</h2>
            <div className="buttons">
                <button onClick={() => navigate("/admin/add-book")}>Add Book</button>
                <button onClick={() => navigate("/admin/view-books")}>View Books</button>
            </div>
        </div>
    );
};

export default ManageBooks;
