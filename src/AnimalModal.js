import { useRef } from "react";

const AnimalModal = (props) => {
    const modalRef = useRef();

    const handleClick = (e) => {
        if(modalRef.current === e.target){
            props.closeModal(false)
        }
    }

    return (
        <div className="modalBackground" ref={modalRef} onClick={handleClick}>
            <div className="modalBox">
                <div className="leftSection">
                    <img src={props.animal.image_link} alt={`${props.animal.name}`} />
                </div>
                <div className="rightSection">
                    <h1>{props.animal.name}</h1>
                    <p>{props.animal.latin_name}</p>
                    <h3><span>Type:</span> {props.animal.animal_type}</h3>
                    <h3><span>Habitat:</span> {props.animal.habitat}</h3>
                    <h3><span>Location:</span> {props.animal.geo_range}</h3>
                    <h3><span>Diet:</span> {props.animal.diet}</h3>
                </div>
            </div>
        </div>
    )
}

export default AnimalModal;