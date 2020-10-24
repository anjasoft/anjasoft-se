import React, { useState } from 'react';

function Copyright() {
    return (
        <span>© www.anjasoft.se
            {' '}
            {new Date().getFullYear()}
        </span>
    );
}

export default function FooterSection(props){

    const [msg, updateMsgFunc] = useState("");
    if(!msg)
    {
        props.foaasProxy.GetMessage().then(retval => {
            updateMsgFunc(retval);
        });
    }


    return (
        <footer>
            <div className="container footer txt-light">
                <div className="row">
                    <Copyright />
                </div>
                <div className="row txt-smaller">
                   <a className="discreet-link" href="https://www.foaas.com">{msg}</a>
                </div>
            </div>
        </footer >
    );
}