import React from "react";

export default function NoteInput() {
    return (
        <div>
            <div className="font-bold text-2xl">Note</div>
            <div className="w-full shadow-xl bg-linear-to-br to-base-300 from-base-200 p-4 rounded">
                <textarea
                    className="w-full resize-none field-sizing-content outline-0 wrap text-wrap"
                    wrap="soft"
                ></textarea>
            </div>
        </div>
    );
}
