import React from "react";
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
        <h2 className="title">Thông tin sinh viên</h2>
      </Row>
      <Row>
        <div className="wrapper">
          <div className="left">
            <img
              src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
              alt="user"
              width={100}
            />
            <h4>Võ Trung Hậu</h4>
            <p>45.01.104.077</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>Thông tin</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>4501104077@student.hcmue.edu.vn</p>
                </div>
              </div>
            </div>
            <div className="projects">
              <h3>Dự án</h3>
              <div className="projects_data">
                <div className="data">
                  <h4>Gần đây</h4>
                  <p>Không có dự án nào.</p>
                </div>
                <div className="data">
                  <h4>Xem nhiều nhất</h4>
                  <p>Không có dự án nào.</p>
                </div>
              </div>
            </div>
            <div className="social_media">
              <ul>
                <li>
                  <a href="/">
                    <FacebookOutlined />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <TwitterOutlined />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <InstagramOutlined />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Profile;
