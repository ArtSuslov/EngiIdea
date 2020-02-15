import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid #818181;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px grey;
  }

  ${Icon} {
    visibility: ${props => (props.isChecked ? 'visible' : 'hidden')}
  }
`

const Checkbox = ({ className, isChecked = true, ...props }) => (
  <Wrapper>
    <label>
        <CheckboxContainer className={className}>
            <HiddenCheckbox isChecked={isChecked} {...props} />
            <StyledCheckbox isChecked={isChecked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
        <span style={{ marginLeft: 8 }}>{props.name}</span>
    </label>
  </Wrapper>
)

export default Checkbox
