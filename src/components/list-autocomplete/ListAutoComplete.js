import React from 'react';
import './list.css';

export default function ListAutoComplete({ listToShow }) {
    return (
        <div className="list-wrapper">
            {
                listToShow?.map((box, index) => (
                    <div className="box-item" onClick={() => alert(`${index + 1}. ${box.label}`)}>
                        <div className="label-box">{box.label}</div>
                        <div className="label-box">{box.value}</div>
                        <div className="category-box">{box.category}</div>
                        <div className="uid-box" onClick={(e) => {
                            e.stopPropagation();
                            alert(box.uid);
                        }}>{box.uid}</div>
                    </div>
                ))
            }
        </div>
    );
}
