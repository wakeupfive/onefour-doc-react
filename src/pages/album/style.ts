import styled from 'styled-components'
import { ThemePropStyled } from '~/assets/styles'

export const AlbumDivAlias = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${(props: ThemePropStyled) => props.theme.$colorBackground};
`