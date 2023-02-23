import React, { useState, useEffect } from "react";
import DashBoard from "./DashBoard";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";



const NavBar = () => {

    const getLocalItem = () => {
        let list = localStorage.getItem('list')
        if (list) {
            return JSON.parse(localStorage.getItem('list'))
        }
        else {
            return [];
        }
    }

    const [UserData, setUserData] = useState('')
    const [Item, setItem] = useState(getLocalItem());
    const [EditButton, setEditButton] = useState(true);
    const [IsEditItem, setIsEditItem] = useState(null);
    const AddUser = () => {
        if (!UserData) {
            alert('Please Fill The Data');
        }
        else if (UserData && !EditButton) {
            setItem(
                Item.map((Data) => {
                    if (Data.id === IsEditItem) {
                        return { ...Data, name: UserData }
                    }
                    return Data
                })
            )
            setEditButton(true);
            setUserData('')
        }

        else {
            const AllUserData = { id: new Date().getTime().toString(), name: UserData }
            setItem([...Item, AllUserData]);
            setUserData('');
        }
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(Item))
    }, [Item]);




    return (
        <>

            <header className="p-3 bg-dark text-white">
                <div className="container-fluid">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a
                            href="/"
                            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                        >
                            <svg
                                className="bi me-2"
                                width={40}
                                height={32}
                                role="img"
                                aria-label="Bootstrap"
                            >
                                <use xlinkHref="#bootstrap" />
                            </svg>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a href="##" className="nav-link px-2 text-white">
                                    Home
                                </a>
                            </li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search..."
                                aria-label="Search"
                                value={UserData}
                                onChange={(event) => setUserData(event.target.value)}
                            />
                        </form>
                        <div className="text-end">
                            {
                                EditButton ? <button type="button" className="btn btn-outline-light me-2"
                                    onClick={AddUser}
                                >
                                    <AiOutlinePlus />
                                    Create New Board
                                </button> :
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm"
                                        onClick={AddUser}
                                    >
                                        <AiOutlineEdit /> Edit User
                                    </button>
                            }
                        </div>

                    </div>
                </div>
            </header>

            <DashBoard
                Item={Item}
                setItem={setItem}
                setEditButton={setEditButton}
                setUserData={setUserData}
                setIsEditItem={setIsEditItem}
                UserData={UserData}
                EditButton={EditButton}
                IsEditItem={IsEditItem}
            />



        </>
    );
};

export default NavBar;
