import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router'


import './MyPost.css'
import Footer from '../../../../components/Footer/footer'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import UserHeader from '../../../../components/user/userHeader/userHeader'
import { GetCongViecDaUngTuyenService } from '../../../../ApiServices/GetDataApi/GetCongViecDaUngTuyen';

import { useEffect } from "react" 
import { GetCTYByHRService } from "../../../../ApiServices/GetDataApi/getMyCongTy.js"

const MyPost = () => {
    const navigate = useNavigate();
    const handleChiTiet=(idCongViec) => {
        navigate(`/user/JobDetail/${idCongViec}`);
    };
    const handleDsUngVien = (idCongViec) => {
         navigate(`/user/UngTuyen/DanhSachUV/${idCongViec}`);
        // console.log(idCongViec);
    };

    const { GetCongViecDaUngTuyenResponse } = GetCongViecDaUngTuyenService();
        // console.log(GetCongViecDaUngTuyenResponse);

    const { GetCTYByHRResponse } = GetCTYByHRService();
    useEffect(() => {
        if(GetCTYByHRResponse){
            localStorage.setItem('idChiNhanh', GetCTYByHRResponse.data[0].id);
        }
    }, [GetCTYByHRResponse])
    // console.log(GetCTYByHRResponse);
    
    return (
        <>
            <UserHeader />
            
            <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
                <h4 style={{fontWeight: 'bold'}}>Danh sách bài đăng của tôi</h4>
                <br />
                <Card >
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col sm='1'><b>STT</b></Col>
                                <Col sm='3'><b>Tên công việc</b></Col>
                                <Col sm='3'><b>Tên công ty</b></Col>
                                <Col sm='3'><b>Lĩnh vực tuyển dụng</b></Col>
                                <Col style={{textAlign:'center'}} sm='2'><b>Tác vụ</b></Col>
                            </Row>
                        </ListGroup.Item>
                        <div>

                            {GetCongViecDaUngTuyenResponse ? (GetCongViecDaUngTuyenResponse.data ? GetCongViecDaUngTuyenResponse.data.map((value, index) => {
                                return (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm='1'>{index + 1}</Col>
                                            <Col sm='3'>{value.tenCV}</Col>
                                            <Col sm='3'>{value.tenCty}</Col>
                                            <Col sm='3'>{value.tenChuyenNganh}</Col>
                                            <Col sm='2'>
                                                <Button onClick={()=>handleChiTiet(value.congviecId)}>Chi Tiết</Button>
                                                <Button onClick={()=> handleDsUngVien(value.congviecId)} style={{marginLeft:'20px'}} >Ứng viên</Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            }): <Row>
                                    <Col style={{padding:'10px', marginLeft:'10px', fontStyle: 'italic', textAlign: 'left'}}>Bạn chưa có bài đăng tuyển nào</Col>
                                </Row>) : 
                                <Row>
                                    <Col style={{padding:'10px', marginLeft:'10px', fontStyle: 'italic', textAlign: 'left'}}>Bạn chưa có bài đăng tuyển nào</Col>
                                </Row> }
                        </div>
                    </ListGroup>
                </Card>
            </Container>

            <Footer />
        </>
    )
}
export default MyPost