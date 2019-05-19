import * as React from "react";
import { Waypoint } from "react-waypoint";

export const ViewportContext = React.createContext(false);
export const useViewport = () => React.useContext(ViewportContext);

export const ViewportContextProvider: React.FunctionComponent = ({
  children
}) => {
  const [visible, setVisible] = React.useState(false);
  const handleWaypointEnter = React.useCallback(() => setVisible(true), [
    setVisible
  ]);
  return (
    <Waypoint onEnter={handleWaypointEnter} bottomOffset={200}>
      <div>
        <ViewportContext.Provider value={visible}>
          {children}
        </ViewportContext.Provider>
      </div>
    </Waypoint>
  );
};

export default ViewportContext;
