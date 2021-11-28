import React, { useEffect } from "react";
import { Row } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

function Profile(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thông tin sinh viên";
  }, []);

  return (
    <>
      <Row>
        <h2 className="title">Thông tin nhóm</h2>
      </Row>
      <Row>
        <div className="wrapper">
          <div className="left">
            <img
              src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
              alt="user"
              width={100}
            />
          </div>
          <div className="right">
            <div className="info">
              <h3>Thông tin</h3>
              <div className="info_data">
                <div className="data">
                  <p>Nhóm NoHope</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Profile;
