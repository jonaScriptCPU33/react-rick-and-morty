import React from 'react'

export const NavPage = (props) => {

    const inCrementPag = () => {
        props.setPage(props.page + 1);
    }

    const deCrementPag = () => {
        if(props.page <= 1) return;
        props.setPage(props.page - 1);
    }


    return (
        <>
            <header className="d-flex justify-content-between  align-items-center">
                <button className="btn btn-primary btn-sm"
                    onClick={deCrementPag}> Prev Page: {props.page - 1}</button>
                <p>Current Page: {props.page}</p>
                <button className="mt-5 mb-5 btn btn-primary btn-sm "
                    onClick={inCrementPag}> Next Page: {props.page + 1}</button>
            </header>
        </>
    )
}
