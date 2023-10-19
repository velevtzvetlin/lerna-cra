import React from 'react';

interface Props {
    onClick: () => void;
}

const Button: React.FC<Props> = (props) => (
    <button {...props} />
)

export default Button;