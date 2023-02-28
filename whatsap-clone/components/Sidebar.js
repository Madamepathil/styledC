import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";

const Sidebar = () => {
  const createChat = (e) => {
    const input = prompt(
      "please enter email adress for the user you wish to chat with"
    );

    if (!input) return;
    if (EmailValidator.validate(input)) {
      //push chat to the db
    }
  };
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* List of chats */}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 300px;
`;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const IconContainer = styled.div``;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  transition: all 1s ease-in-out;

  &:hover {
    transform: translateX(5px);
    color: red;
    opacity: 0.8;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline: none;
  border: 1px solid whitesmoke;
  flex: 1;
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
