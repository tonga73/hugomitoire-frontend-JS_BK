import { keyframes } from "@mui/material";

export const spin = keyframes`
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const pulse = keyframes`
0%, 100% {
  opacity: 1;
}
50% {
  opacity: .5;
}
`;

export const gradient = keyframes`
  0% {
    backgroundPosition: 0% 50%;
  }
  50% {
    backgroundPosition: 100% 50%;
  }
  100% {
    backgroundPosition: 0% 50%;
  }
`;

export const imagebulger = keyframes`
  0%, 100% {
    backgroundSize: 100% auto;
    WebkitBackgroundSize: 100%;
  }
  50% {
    backgroundSize: 50% auto;
    WebkitBackground-size: 50%;
  }
`;
