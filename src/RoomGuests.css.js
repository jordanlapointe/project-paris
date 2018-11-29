import styled from 'styled-components'

export const Wrapper = styled.li`
  background-color: var(--color-gray-light);
  border: 3px solid var(--color-gray-light);
  border-radius: 3px;
  display: inline-block;
  list-style: none;
  margin-right: 6px;
  vertical-align: top;

  &.is-selected {
    background-color: #fff;
  }
`

export const Toggle = styled.div`
  padding: 10px 15px;

  ${Wrapper}.is-selected & {
    background-color: var(--color-gray-light);
  }
`

export const ToggleInput = styled.input`
  &:disabled {
    position: absolute;
    left: -9999px;
  }
`

export const ToggleLabel = styled.label`
  ${Wrapper}.is-selected & {
    font-weight: bold;
  }
`

export const Options = styled.div`
  display: flex;
  padding: 10px 15px;
`

export const Option = styled.div`
  width: 50%;
`