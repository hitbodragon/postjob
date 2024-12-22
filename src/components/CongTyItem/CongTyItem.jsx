import React from 'react';
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export const CongTyItem = ({ dataCongty, setEditingData, setToggle }) => {

    // Kiểm tra xem dataCongty có phải là một mảng và có phần tử không
    if (!Array.isArray(dataCongty) || dataCongty.length === 0) {
        return (
            <ListGroup.Item>
                <Row>
                    <Col sm="12" className="text-center">
                        <p>Không có công ty nào để hiển thị.</p>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }

    const handleEditClick = (companyData) => {
        setEditingData(companyData); // Lưu dữ liệu công ty cần chỉnh sửa
        setToggle(true); // Chuyển sang chế độ chỉnh sửa
    };

    return (
        <ListGroup.Item>
            <Row>
                {dataCongty.map((value, index) => (
                    <Row key={index} className="align-items-center mb-2">
                        <Col sm='3' className="text-center">{value.tenCty}</Col>
                        <Col sm='4' className="text-center">{value.tenDiaChi}</Col>
                        <Col sm='2' className="text-center">{value.tenChuyenNganh}</Col>
                        <Col sm='2' className="text-center">
                            <Button
                                className='btnEdit_Update'
                                style={{marginLeft: '40px'}}
                                onClick={() => handleEditClick(value)} // Gọi hàm chỉnh sửa khi nhấn nút Edit
                            >
                                <FontAwesomeIcon icon={faEdit} size="1x" color="#198754" />
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Row>
        </ListGroup.Item>
    );
};
