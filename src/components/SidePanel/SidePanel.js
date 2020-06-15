import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "../UserPanel/UserPanel";
import Channels from "../Channels/Channels";
import DirectMessages from '../DirectMessages/DirectMessages';

class SidePanel extends React.Component {
  render() {
    const { currentUser } = this.props;
    
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#0071b8", fontSize: "1.2rem" }}
      >
        <UserPanel currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;