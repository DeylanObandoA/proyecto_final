import React from "react";
import "./ButtonPag.css"

function ButtonPag({ currentPage, onPageChange, courses }) {

    function handleAnteriorClick() {
        onPageChange(currentPage - 1);
    }

    function handleSiguienteClick() {
        onPageChange(currentPage + 1);
    }

    return (
        <div className="boxbutton">
            <button className="buttonpag" onClick={handleAnteriorClick} disabled={currentPage === 1}>
                Anterior
            </button>
            <button className="buttonpag" onClick={handleSiguienteClick} disabled={!courses || courses.length === 0}>
                Siguiente
            </button>
        </div>
    );
}

export default ButtonPag;