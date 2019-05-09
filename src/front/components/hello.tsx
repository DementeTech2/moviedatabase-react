import * as React from 'react';

import './hello.scss';

class Hello extends React.Component<{}, {}> {
    render() {
        return (
            <h1 className="stupid-class">Welcome to React!!</h1>
        );
    }
}

export default Hello