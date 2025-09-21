import { type ComponentType } from "react";
import "./AboutModal.css";

interface AboutModalProps {
    title: string
    CellComponent: ComponentType<{ onClose: () => void }>
    onClose: () => void;
}

export default function AboutModal({ title, CellComponent, onClose }: AboutModalProps) {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                <div className="modal-body"><div className="modal-body">
                    <CellComponent onClose={onClose} />
                </div>

                </div>
            </div>
        </div>
    );
}
