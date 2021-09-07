import React from 'react'
import Btn from '@material-ui/core/Button'

const Button = ({color, variant, ...rest}) => {
    return (
        <>
        <Btn color={color} variant={variant} {...rest}  >
            GET USERS
        </Btn>
        </>
    )
}

export default Button
