import styled from 'styled-components'
import { ThemePropStyled } from '~/assets/styles'

export const SliderDivAlias = styled.div`
  min-height: 1px;
  font-size: 0;
  touch-action: pan-y;
  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-page {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      a {
        display: block;
        width: 100%;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .dots-wrapper {
    position: absolute;
    left: 50%;
    bottom: 12px;
    line-height: 12px;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props: ThemePropStyled) => props.theme.$colorTextL};
      &.active {
        width: 20px;
        border-radius: 5px;
        background: ${(props: ThemePropStyled) => props.theme.$colorTextLl};
      }
    }
  }
`