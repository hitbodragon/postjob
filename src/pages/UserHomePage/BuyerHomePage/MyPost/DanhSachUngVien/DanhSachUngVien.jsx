import React, { useEffect, useState } from "react";
import { Space, Button, Tag, message, Select, Row, Col, Modal } from "antd";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import Footer from "../../../../../components/Footer/footer";
import TableCustom from "../../../../../components/TableCustom/TableCustom";
import { Container } from "react-bootstrap";
import UserHeader from "../../../../../components/user/userHeader/userHeader";
import { GetDSUngVienByCVIECService } from "../../../../../ApiServices/GetDataApi/GetDSUngVienByCViec";
import { ChuyenTrangThaiService } from "../../../../../ApiServices/UngTuyen/ChuyenTrangThai";
import { GetAllCV } from "../../../../../ApiServices/AuthService/getAllCV";

const { Option } = Select;

const DSUngVien = () => {
  const { id } = useParams();
  const { GetDsUngVienResponse, GetDsUngVienRefetch } = GetDSUngVienByCVIECService(id);
  const { ChuyenTrangThaiResponse, callChuyenTrangThaiRefetch } = ChuyenTrangThaiService();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  // Lưu trữ danh sách ứng viên, tiêu chí lọc và trạng thái nút
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [filterCertificate, setFilterCertificate] = useState("");
  const [filterSpecialization, setFilterSpecialization] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);

  useEffect(() => {
    if (GetDsUngVienResponse) {
      setDataSource(GetDsUngVienResponse.data || []);
      setFilteredData(GetDsUngVienResponse.data || []);
    }
  }, [GetDsUngVienResponse]);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đã nhận ứng viên",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đã từ chối ứng viên",
    });
  };

  useEffect(() => {
    if (ChuyenTrangThaiResponse) {
      GetDsUngVienRefetch();
    }
  }, [ChuyenTrangThaiResponse]);

  const handleChapNhan = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn chấp nhận ứng viên này không?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        callChuyenTrangThaiRefetch(id, { trangThai: "Đã nhận" });
        success();
        setDataSource((prevData) =>
          prevData.map((item) =>
            item.id === id
              ? { ...item, trangThai: "Đã nhận", daChapNhan: true }
              : item
          )
        );
        handleFilterChange(); // Áp dụng bộ lọc lại sau khi cập nhật
      }
    });
  };

  const handleTuChoi = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn từ chối ứng viên này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        callChuyenTrangThaiRefetch(id, { trangThai: "Từ chối" });
        error();
        setDataSource((prevData) =>
          prevData.map((item) =>
            item.id === id
              ? { ...item, trangThai: "Từ chối", daTuChoi: true }
              : item
          )
        );
        handleFilterChange(); // Áp dụng bộ lọc lại sau khi cập nhật
      }
    });
  };

  // Hàm lọc khi người dùng nhấn nút Submit
  const handleFilterChange = () => {
    let filtered = [...(dataSource || [])];

    // Áp dụng lọc trạng thái
    if (filterStatus) {
      filtered = filtered.filter(
        (item) => item.trangThai.toLowerCase() === filterStatus.toLowerCase()
      );
    }

    // Áp dụng lọc vị trí ứng tuyển (so sánh với lowercase nhưng hiển thị dữ liệu gốc)
    if (filterPosition) {
      filtered = filtered.filter((item) =>
        item.cv.vitriUngTuyen
          .toLowerCase()
          .includes(filterPosition.toLowerCase())
      );
    }

    // Áp dụng lọc chứng chỉ (so sánh với lowercase nhưng hiển thị dữ liệu gốc)
    if (filterCertificate) {
      filtered = filtered.filter((item) =>
        item.cv.chungChi.toLowerCase().includes(filterCertificate.toLowerCase())
      );
    }

    // Áp dụng lọc chuyên môn (so sánh với lowercase nhưng hiển thị dữ liệu gốc)
    if (filterSpecialization) {
      filtered = filtered.filter((item) =>
        item.cv.chuyenMon
          .toLowerCase()
          .includes(filterSpecialization.toLowerCase())
      );
    }

    // Loại bỏ dữ liệu trùng
    const uniqueFilteredData = Array.from(
      new Set(filtered.map((a) => a.id))
    ).map((id) => filtered.find((a) => a.id === id));

    setFilteredData(uniqueFilteredData);
  };

  const handleShowDetails = (cv) => {
    setSelectedCV(cv);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Họ",
      render: (_, record) => (record.cv ? <a>{record.cv.ho}</a> : ""),
      key: "ho",
    },
    {
      title: "Tên",
      render: (_, record) => (record.cv ? <a>{record.cv.ten}</a> : ""),
      key: "ten",
    },
    {
      title: "Email",
      render: (_, record) => (record.cv ? <a>{record.cv.email}</a> : ""),
      key: "email",
    },
    {
      title: "SĐT liên hệ",
      render: (_, record) => (record.cv ? <a>{record.cv.sdt}</a> : ""),
      key: "sdt",
    },
    {
      title: "Vị trí ứng tuyển",
      render: (_, record) =>
        record.cv ? <a>{record.cv.vitriUngTuyen}</a> : "",
      key: "vitriUngTuyen",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
      render: (text) => (
        <Tag
          color={text === "Đã nộp" ? "blue" : text === "Đã nhận" ? "green" : "red"}
        >
          {text ? text.toUpperCase() : ""}
        </Tag>
      ),
    },
    {
      title: "Tác vụ",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleChapNhan(record.id)}
            disabled={
              record.trangThai === "Đã nhận" || record.trangThai === "Từ chối"
            }
          >
            Chấp nhận
          </Button>
          <Button
            danger
            onClick={() => handleTuChoi(record.id)}
            disabled={
              record.trangThai === "Từ chối" || record.trangThai === "Đã nhận"
            }
          >
            Từ chối
          </Button>
          <Button
            onClick={() => handleShowDetails(record.cv)}
            style={{ backgroundColor: "#00c056", color: "#fff" }}
          >
            Chi tiết
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <UserHeader />
      <Container>
        <h3 style={{ margin: "40px 0" }}>Danh sách Ứng viên</h3>

        <Row gutter={24} style={{ marginBottom: 20 }} align="middle">
          <Col span={6}>
            <Select
              placeholder="Lọc theo trạng thái"
              style={{ width: "100%" }}
              onChange={(value) => {
                setFilterStatus(value);
              }}
              allowClear
            >
              <Option value="Đã nộp">Đã nộp</Option>
              <Option value="Đã nhận">Đã nhận</Option>
              <Option value="Từ chối">Từ chối</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select
              placeholder="Lọc theo vị trí ứng tuyển"
              style={{ width: "100%" }}
              onChange={(value) => {
                setFilterPosition(value);
              }}
              allowClear
            >
              {Array.from(
                new Set((dataSource || []).map((item) => item.cv.vitriUngTuyen))
              ).map((vitri) => (
                <Option key={vitri} value={vitri}>
                  {vitri}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              placeholder="Lọc theo chứng chỉ đạt được"
              style={{ width: "100%" }}
              onChange={(value) => {
                setFilterCertificate(value);
              }}
              allowClear
            >
              {Array.from(
                new Set((dataSource || []).map((item) => item.cv.chungChi))
              ).map((chungChi) => (
                <Option key={chungChi} value={chungChi}>
                  {chungChi}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              placeholder="Lọc theo kỹ năng chuyên môn"
              style={{ width: "100%" }}
              onChange={(value) => {
                setFilterSpecialization(value);
              }}
              allowClear
            >
              {Array.from(
                new Set((dataSource || []).map((item) => item.cv.chuyenMon))
              ).map((chuyenMon) => (
                <Option key={chuyenMon} value={chuyenMon}>
                  {chuyenMon}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col span={4}>
            <Button
              type="primary"
              onClick={handleFilterChange}
              style={{ width: "50%" }}
            >
              Lọc
            </Button>
          </Col>
        </Row>

        {/* Hiển thị thông báo nếu không có ứng viên nào */}
        {filteredData.length === 0 ? (
          <p><i>Chưa có ứng viên nào ứng tuyển vào công việc này</i></p>
        ) : (
          <TableCustom columns={columns} data={filteredData} />
        )}

        {/* Modal chi tiết CV */}
        <Modal
          title={
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Chi tiết CV
            </div>
          }
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          width={700}
        >
          {selectedCV && (
            <div style={{ fontSize: "16px" }}>
              <p>
                <strong>Email: </strong>
                {selectedCV.email}
              </p>
              <p>
                <strong>Họ: </strong>
                {selectedCV.ho}
              </p>
              <p>
                <strong>Tên: </strong>
                {selectedCV.ten}
              </p>
              <p>
                <strong>Ngày sinh: </strong>
                {selectedCV.ngaySinh}
              </p>
              <p>
                <strong>Địa chỉ: </strong>
                {selectedCV.diaChi}
              </p>
              <p>
                <strong>Số điện thoại: </strong>
                {selectedCV.sdt}
              </p>
              <p>
                <strong>Trình độ học vấn: </strong>
                {selectedCV.hocVan}
              </p>
              <p>
                <strong>Kỹ năng mềm: </strong>
                {selectedCV.kyNangMem}
              </p>
              <p>
                <strong>Kỹ năng chuyên môn: </strong>
                {selectedCV.chuyenMon}
              </p>
              <p>
                <strong>Vị trí ứng tuyển: </strong>
                {selectedCV.vitriUngTuyen}
              </p>
              <p>
                <strong>Mô tả: </strong>
                {selectedCV.moTa}
              </p>
              <p>
                <strong>Kinh nghiệm làm việc: </strong>
                {selectedCV.kinhNghiem}
              </p>
              <p>
                <strong>Chứng chỉ đạt được: </strong>
                {selectedCV.chungChi}
              </p>
              <p>
                <strong>Dự án thực tế: </strong>
                {selectedCV.project}
              </p>
            </div>
          )}
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default DSUngVien;
