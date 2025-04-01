import React from "react";
import TitleInput from "../Components/TitleInput";
import NoteInput from "../Components/NoteInput";

export default function Index() {
    return (
        <>
            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <div>
                        <div className="h-[100vh] w-[100vw] container mx-auto gap-4 p-4 flex">
                            <div>
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-square drawer-button btn-ghost lg:drawer-open xl:drawer-open md:drawer-open"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-5 w-5 stroke-current"
                                    >
                                        {" "}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>{" "}
                                    </svg>
                                </label>
                            </div>
                            <div className="flex-grow flex flex-col gap-8">
                                <TitleInput />
                                <NoteInput />
                            </div>
                            <div>
                                <span>forget_me_not</span>
                            </div>
                        </div>
                    </div>
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-primary drawer-button"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
