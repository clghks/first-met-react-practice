import React from "react"
import styled from "styled-components"

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => props.hegiht && `hegiht: ${props.hegiht}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`

function TextInput(props) {
    const { hegiht, value, onChange } = props

    return <StyledTextarea hegiht={hegiht} value={value} onChange={onChange}></StyledTextarea>
}

export default TextInput
