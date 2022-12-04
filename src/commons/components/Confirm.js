import React from "react";
const Confirm = (props) => {
    const { id, title, message, confirm } = props;
    return (
        <div className={"modal fade"} id={id} tabIndex="-1" role="dialog" aria-labelledby={id + "Title"} aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {title ?
                        <div className="modal-header">
                            {title ?
                                <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                                : null}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        : null}
                    <div className="modal-body text-center">
                        {title ? null :
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        }
                        {message}
                    </div>

                    <div className="modal-footer text-center">
                        <button type="button" className="fw-btn-fill btn-gradient-yellow col-4" style={{ margin: '0 auto' }} onClick={() => confirm(true)}>Sure</button>
                        <button type="button" className="fw-btn-fill bg-blue-dark btn-hover-yellow col-4" style={{ margin: '0 auto' }} data-dismiss="modal" onClick={() => confirm(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Confirm;

