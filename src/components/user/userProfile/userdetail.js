import React,{useEffect} from "react"
import { Link } from "react-router-dom"
import { Col, Row, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEdit, faLocationDot, faEnvelope, faCakeCandles,faContactCard } from "@fortawesome/free-solid-svg-icons"


import User_img from '../../../accets/img_form/user.jpg'
import './userdetail.css'


const UserDetail = ({ editProfile, getCVByIDResponse }) => {

    return (
        <div className="userdetail">
            <div className="container">
                <div className="userInfo">
                    <div className="user_rate">
                        <Row>
                            <Col xs lg='12' style={{ textAlign: "center", marginBottom: "20px" }}>
                                <img width='300px' height="300px" alt="userImg" src={User_img} />
                            </Col>
                            <Col xs lg='12' style={{ textAlign: "center" }}>
                                <h3>{getCVByIDResponse.ho} {getCVByIDResponse.ten}</h3>
                                <Button onClick={editProfile} className="editProfile">
                                    <FontAwesomeIcon style={{ marginRight: 4 + 'px' }} icon={faEdit} size="1x" color="##74767e"></FontAwesomeIcon>
                                    Chỉnh sửa hồ sơ
                                </Button>
                            </Col>
                        </Row>
                        <div className="line"></div>
                        <Row>
                            <Col xs lg="12" style={{ textAlign: "center" }}>{getCVByIDResponse.vitriUngTuyen}</Col>
                        </Row>
                        <div className="line"></div>
                        <Row>
                            <Col xs lg="2" className="icon-col">
                                <FontAwesomeIcon icon={faCakeCandles} />
                            </Col>
                            <Col xs lg="10" className="data-col">
                                {getCVByIDResponse.ngaySinh}
                            </Col>
                            <Col xs lg="2" className="icon-col">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </Col>
                            <Col xs lg="10" className="data-col">
                                {getCVByIDResponse.diaChi}
                            </Col>
                            <Col xs lg="2" className="icon-col">
                                <FontAwesomeIcon icon={faPhone} />
                            </Col>
                            <Col xs lg="10" className="data-col">
                                {getCVByIDResponse.sdt}
                            </Col>
                            <Col xs lg="2" className="icon-col">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Col>
                            <Col xs lg="10" className="data-col">
                                {getCVByIDResponse.email}
                            </Col>
                            <Col xs lg="2" className="icon-col">
                                <FontAwesomeIcon icon={faContactCard} />
                            </Col>
                            <Col xs lg="10" className="data-col">
                                {getCVByIDResponse.cccd}
                            </Col>
                        </Row>


                    </div>
                </div>

                <div className="profile__Detail">
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Kỹ năng chuyên môn</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.chuyenMon}</li>
                        </ul>
                    </Row>
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Kỹ năng mềm</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.kyNangMem}</li>
                        </ul>
                    </Row>
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Mô tả</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.moTa}</li>
                            
                        </ul>
                    </Row>
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Trình độ học vấn</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.hocVan}</li>
                            
                        </ul>
                    </Row>
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Kinh nghiệm làm việc</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.kinhNghiem}</li>
                            
                        </ul>
                    </Row>
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Chứng chỉ đạt được</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.chungChi}</li>
                            
                        </ul>
                    </Row>
                    <Row style={{minHeight: '100px'}}>
                        <h5 className="profile__title">Dự án thực tế</h5>
                        <ul className="List_language">
                            <li>{getCVByIDResponse.project}</li>
                            
                        </ul>
                    </Row>

                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail