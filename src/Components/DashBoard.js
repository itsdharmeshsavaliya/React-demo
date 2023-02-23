import React from "react";
import MyBoard from "./MyBoard";
// import { DeleteUserOnBoard, EditUserOnBoard } from "../Action/Index";

import { AiOutlineEdit } from "react-icons/ai";

const DashBoard = ({ Item, setItem, setEditButton, setUserData, setIsEditItem }) => {



    const DeleteUser = (index) => {
        const NewUSerWithFilter = Item.filter((Data) => {
            return index !== Data.id;
        })
        setItem(NewUSerWithFilter);
    }




    const EditUser = (id) => {
        const NewEditItem = Item.find((Item) => {
            return Item.id === id
        })
        console.log(NewEditItem);
        setEditButton(false);
        setUserData(NewEditItem.name);
        setIsEditItem(id);
    }




    return (
        <>
            <MyBoard />
            <div className="container user-data">
                <div className="row">

                    {
                        Item.map((Item, id) => {
                            return (
                                <div className="col-md-3" key={id}>
                                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="..." className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{Item.name}</h5>
                                                    <p className="card-text">
                                                        <button type="button" className="btn btn-secondary btn-sm"
                                                            onClick={() => DeleteUser(Item.id)}
                                                        >
                                                            Delete
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary btn-sm"
                                                            onClick={() => EditUser(Item.id)}
                                                        >
                                                            <AiOutlineEdit /> Edit User
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};


export default DashBoard