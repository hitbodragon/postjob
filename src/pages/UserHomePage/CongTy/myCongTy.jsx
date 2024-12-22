import React, { useState } from "react";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import Footer from "../../../components/Footer/footer";
import UserHeader from "../../../components/user/userHeader/userHeader";
import './myCongTy.css';
import { CongTyItem } from "../../../components/CongTyItem/CongTyItem";

// Call API get List Orders
import { GetCTYByHRService } from "../../../ApiServices/GetDataApi/getMyCongTy";
import FormThemCongTy from "../../../components/FormInput/FormThemCongTy/FormThemCongTy";

const MyCTY = () => {
    const { GetCTYByHRResponse, GetCTYByHRRefetch, isLoading, error } = GetCTYByHRService(); // Assuming the service provides isLoading and error
    const [toggle, setToggle] = useState(false);
    const [editingData, setEditingData] = useState(null); // State to store company data for editing

    // Handle loading and error states
    const isDataEmpty = !GetCTYByHRResponse || GetCTYByHRResponse.data.length === 0;

    return (
        <div className="gigs">
            {toggle ? (
                <FormThemCongTy GetCTYByHRRefetch={GetCTYByHRRefetch} setToggle={setToggle} editingData={editingData} />
            ) : (
                <>
                    <UserHeader />
                    <div className="container">
                        <h4
                            style={{
                                textAlign: isDataEmpty ? 'left': 'center',
                                fontWeight: 'bold'
                            }}
                            className="font"
                        >
                            Thông tin công ty
                        </h4>
                        {isDataEmpty && !isLoading ? (
                            <Button style={{marginBottom: '10px'}} onClick={() => setToggle(true)}>Tạo thông tin công ty</Button>
                        ) : null}
                        {/* <br/> */}
                        <Card>
                            <ListGroup variant="flush">
                                {/* <ListGroup.Item>
                                    
                                    {isLoading && <p>Đang tải thông tin công ty...</p>}
                                    {error && <p style={{ color: 'red' }}>Có lỗi khi tải thông tin công ty: {error.message}</p>}
                                </ListGroup.Item> */}
                                <ListGroup.Item>
                                    <Row className="align-items-center mb-2">
                                        <Col sm='3' className="text-center"><b>Tên công ty</b></Col>
                                        <Col sm='4' className="text-center"><b>Địa chỉ</b></Col>
                                        <Col sm='2' className="text-center"><b>Lĩnh vực tuyển dụng</b></Col>
                                        <Col sm='2' className="text-center"><b>Tác vụ</b></Col>
                                    </Row>
                                </ListGroup.Item>
                                <div className="table_gigs">
                                    {GetCTYByHRResponse ? (
                                        <CongTyItem dataCongty={GetCTYByHRResponse.data} setEditingData={setEditingData} setToggle={setToggle} />
                                    ) : (
                                        <Col sm='12' style={{ marginBottom: '10px', marginLeft: '10px', marginTop: '10px' }}>
                                            {isDataEmpty ? <i>Bạn chưa thêm thông tin công ty !!!</i> : null}
                                        </Col>
                                    )}
                                </div>
                            </ListGroup>
                        </Card>
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
};

export default MyCTY;
