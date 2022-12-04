import React from "react";
import { Link } from "react-router-dom";
import Input from './Input'
const Table = (props) => {
    const pad = (num, places, pad = "0") => {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join(pad) + num;
    }
    return (
        <table className={props.className}>
            {props.heading ?
                <thead>
                    <tr>
                        {props.heading.map((item, i) => (
                            <th key={i} className={item.className}>
                                {item.type === 'checkbox' ?
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input checkAll" />
                                        <label className="form-check-label">{item.label}</label>
                                    </div>
                                    :
                                    item.label
                                }
                            </th>
                        ))}
                    </tr>
                </thead>
                : null
            }
            <tbody>
                {props.data && props.data.length ?
                    props.data.map((row, i) => (
                        <tr key={row._id}>
                            {props.heading.map((item, i) => {
                                let value = "";
                                if (item.type != 'array') {
                                    if (item.key && item.key.indexOf('.') !== -1) {
                                        item.key.split('.').map(a => {
                                            value = value ? value[a] : row[a];
                                            return a;
                                        });
                                    } else {
                                        value = row[item.key];
                                    }
                                } else {
                                    let k = item.key.split('.');
                                    // console.log(k)
                                    if (k.length == 2) {
                                        value = (row[k[0]]||[]).map(a=>a[k[1]]).join();
                                    }
                                }
                                return (<td key={row._id + '-' + i} className={item.className}>
                                    {item.type === 'checkbox' ?
                                        <div className="form-check">
                                            <Input
                                                type="checkbox"
                                                className="form-check-input"
                                                value={row._id}
                                            />
                                            <label className="form-check-label">{item.prefix + pad(row[item.key] || row._id, item.pad)}</label>
                                        </div>
                                        :
                                        item.type === 'image' ?
                                            <img src={row[item.key]||'/img/figure/student2.png'} alt="student" />
                                            : item.type === 'email' ?
                                                <Link to={"mailto:" + row[item.key]} className="__cf_email__">{row[item.key]}</Link>
                                                :
                                                item.type === 'action' ?
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            {item.actions.delete ?
                                                                <Link className="dropdown-item" to="#" onClick={() => props.delete(row[item.actions.delete.key])}><i className="fas fa-times text-orange-red"></i>{item.actions.delete.label || 'Close'}</Link>
                                                                : null}
                                                            {item.actions.edit ?
                                                                <Link className="dropdown-item" to="#" onClick={() => props.edit(row[item.actions.edit.key])}><i className="fas fa-cogs text-dark-pastel-green"></i>{item.actions.edit.label || 'Edit'}</Link>
                                                                : null}
                                                            {item.actions.view ?
                                                                <Link className="dropdown-item" to="#" onClick={() => props.view(row[item.actions.view.key])}><i className="fas fa-cogs text-dark-pastel-green"></i>{item.actions.view.label || 'Edit'}</Link>
                                                                : null}
                                                            {item.actions.refresh ?
                                                                <Link className="dropdown-item" to="#" onClick={() => props.refresh(row[item.actions.refresh.key])}><i className="fas fa-redo-alt text-orange-peel"></i>{item.actions.refresh.label || 'Refresh'}</Link>
                                                                : null}
                                                        </div>
                                                    </div>
                                                    :
                                                    value
                                    }
                                </td>)
                            }
                            )}
                        </tr>
                    ))

                    :
                    <tr>
                        <td colSpan={props.heading.length || 1} className="text-center">
                            No data found.
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    );
}
export default Table;