import styled from 'styled-components'

export const RecommendDivAlias = styled.div`
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: ${(props: any) => props.theme.$fontSizeMedium};
        color: ${(props: any) => props.theme.$colorTheme};
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: ${(props: any) => props.theme.$fontSizeMedium};
        }
        .name {
          margin-bottom: 10px;
          color: ${(props: any) => props.theme.$colorText};
        }
        .title {
          color: ${(props: any) => props.theme.$colorTextD};
        }
      }
    }
  }
`