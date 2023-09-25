import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '40px' }}>
            {props.alert && <div>
                <div className="alert alert-success  alert-dismissible fade show" role="alert">
                    <strong>{props.alert.message}</strong> {props.alert.type}
                </div>
            </div>
            }
        </div>

    )
}
