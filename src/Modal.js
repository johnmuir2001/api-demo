import { useRef } from "react";

const Modal = (props) => {
    const modalRef = useRef();

    const handleClick = (e) => {
        if(modalRef.current === e.target){
            props.closeModal(false)
        }
    }
    const handleCloseClick = (e) => {
        props.closeModal(false)
    }

    return (
        <div id="modalBackground" ref={modalRef} onClick={handleClick}>
            <div id="modalBox">
                <p id="closeIcon" onClick={handleCloseClick}>x</p>
                <div id="leftSection">
                    <img src={props.product.image} alt="item of clothing"/>
                </div>
                <div id="rightSecion">
                    <h5>{props.product.category}</h5>
                    <h1>{props.product.title}</h1>
                    <div>
                        <h4>£{props.product.price}</h4>
                        <div id="ratingWrapper">
                            <div id="rating">
                                <div className="blue star"></div>
                                <div className="black star" style={{ width: `${(props.product.rating.rate/5) * 100}px`}}></div>
                            </div>
                            <h6>({props.product.rating.count})</h6>
                        </div>
                    </div>
                    <p>{props.product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;