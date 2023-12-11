import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getUsesrList } from "api/user";

import Layout from "components/layout/Layout";
import CreateUserModal from "components/modal/CreateUserModal";
import SectionTitle from "components/table/SectionTitle";
import { useState } from "react";

/**
 * @component userManager
 * @description 사용자 페이지
 */
function userManager(): JSX.Element {
  const [open, setOpen] = useState(false);

  /**
   * @function onClickModalOpen
   * @description 생성버튼 클릭시 모달오픈
   */
  const onClickModalOpen = () => {
    setOpen(true);
  };

  return (
    <Layout>
      <CreateUserModal modaltoggle={open} setModalToggle={setOpen} />
      <ManagerBox>
        <SectionTitle>사용자 관리</SectionTitle>
        <button
          type="button"
          className="create-user"
          onClick={onClickModalOpen}
        >
          생성
        </button>
      </ManagerBox>
    </Layout>
  );
}

export default userManager;

const ManagerBox = styled.div`
  /* min-height: 700px; */
  button.create-user {
    padding: 10px 15px 8px 15px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["primary"]};
    color: #fff;
    line-height: 15px;
    margin-bottom: 20px;
  }

  button.temp-error {
    padding: 10px 15px 8px 15px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["borderNormal"]};
    color: #fff;
    line-height: 15px;
    margin-bottom: 20px;
    margin-left: 10px;
  }
`;

const UserUpdateBox = styled.div`
  .text-btn {
    color: ${(props) => props.theme["primary"]};
    font-size: 12.5px;
  }
`;
