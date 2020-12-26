import React, {useMemo} from 'react';

export default function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (<div className="App-footer">{`© Ying-Chi (Ginny) Chan, ${year}`}</div>)
}