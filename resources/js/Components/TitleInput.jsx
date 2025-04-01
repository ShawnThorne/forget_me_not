import React from "react";

export default function TitleInput() {
    return (
        <div className=" font-bold text-2xl">
            <div>Title</div>
            <div className="w-full text-2xl shadow-xl bg-linear-to-br to-base-200 from-base-300 p-4 rounded">
                <input className="w-full outline-0 font-bold" />
            </div>
        </div>
    );
}
