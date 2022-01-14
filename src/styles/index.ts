import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .first {
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #7dbb91;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      width: 100%;
      height: 100%;
      background: #582534;
    }
    .c {
      width: 100%;
      height: 100%;
      background: #0a7397;
    }
  }
  .second {
    background: green;
  }
  .third {
    background: yellow;
  }
  .fourth {
    background: blue;
  }
`

export const Section = styled.div`
  position: relative;
`

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`

export const Header = styled.header`
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  z-index: 9999;
`

export const A = styled.div`
  .A1 {
    background: #f5f1ea;

    display: flex;
    align-items: flex-end;
  }
`

export const B = styled.div`
  background: #ffffff;
`

export const C = styled.div`
  background: green;
`

export const D = styled.div`
  background: blue;
`

export const E = styled.div`
  background: yellow;
`
