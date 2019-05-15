import * as React from "react";
import Transition, { TransitionProps } from "react-transition-group/Transition";
import { withTheme, WithTheme } from "@material-ui/core";

interface FadeProps extends Partial<TransitionProps>, WithTheme {
  opacity: number;
}
const defaultTimeout = {
  enter: 300,
  exit: 300
};
const Fade: React.FunctionComponent<FadeProps> = ({
  children,
  theme,
  opacity,
  timeout = defaultTimeout,
  ...props
}) => {
  const style = {
    webkitTransition: theme.transitions.create("opacity"),
    transition: theme.transitions.create("opacity")
  };
  const styles: any = {
    entering: { opacity },
    entered: { opacity },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };
  const childrenElement = children as React.ReactElement;
  return (
    <Transition timeout={timeout} {...props}>
      {(state: any, childProps: any) => {
        return React.cloneElement(childrenElement, {
          style: {
            opacity: 0,
            visibility: state === "exited" && !props.in ? "hidden" : undefined,
            ...styles[state],
            ...style,
            ...childrenElement.props.style
          },
          ...childProps
        });
      }}
    </Transition>
  );
};

export default withTheme(Fade);
