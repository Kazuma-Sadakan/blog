import React from 'react'
import "./index.css";
export default function Modal(props) {
    return (
        <div className="modal">
            <ul>
                {Object.keys(props.data).map((key, index) => {
                    return (
                        <li key={index}>
                            <span>{key}</span>
                            <p>{props.data[key]}</p>
                        </li>
                    );
                })}
            </ul>
            <div className="button">
                <button onClidk={() => {}}>cancel</button>
                <button onClidk={() => {}}>confirm</button>
            </div>
        </div>
    )
}
