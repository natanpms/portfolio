import '../App.css';
import { Award } from "lucide-react";

type ModalProps = {
    id: string,
    text_description : string
};

const Modal = ({id, text_description}: ModalProps) => {
    return (
        <div>
            <dialog id={id} className="modal ">
                <div style={{ backgroundColor: 'var(--color-principal)' }} className="modal-box border-2 border-[#6366f1]">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex justify-center gap-2'>
                        <Award className="text-[#6366f1]"/>
                        <h3 className="font-bold text-lg">Principais atribuições</h3>
                    </div>
                    <p className="py-4" dangerouslySetInnerHTML={{ __html: text_description}}></p>
                </div>
            </dialog>
        </div>
    );
}


export default Modal;
