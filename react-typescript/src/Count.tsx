import * as React from 'react';

// interface Props {
//     count: number;
// }

const Count: React.FunctionComponent<{ count: number; }> = (props) => {
    return <h1>{props.count}</h1>;
};

export default Count;