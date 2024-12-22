import React, { useState, useEffect } from "react";
import { Tag, Space, Select } from "antd";
import Footer from "../../../components/Footer/footer";
import UserHeader from "../../../components/user/userHeader/userHeader";
import './MyJob.css';
import TableCustom from "../../../components/TableCustom/TableCustom";
import { GetCViecDaUTService } from "../../../ApiServices/GetDataApi/GetDsCongViecDaUT";
import { Container } from "react-bootstrap";

const { Option } = Select;

const MyJob = () => {
    const idCV = localStorage.getItem('idCV');

    const { GetCViecDaUTResponse, GetCViecDaUTIsLoading, GetCViecDaUTError, GetCViecDaUTRefetch } = GetCViecDaUTService(idCV);

    // State lưu trữ danh sách công việc và tiêu chí lọc
    const [dataSource, setDataSource] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (GetCViecDaUTResponse) {
            setDataSource(GetCViecDaUTResponse.data);
            setFilteredData(GetCViecDaUTResponse.data); // Khởi tạo dữ liệu hiển thị ban đầu
        }
    }, [GetCViecDaUTResponse]);

    const handleFilterChange = (value) => {
        setFilterStatus(value);
        if (value) {
            const filtered = dataSource.filter(item => item.trangThai === value);
            setFilteredData(filtered);
        } else {
            setFilteredData(dataSource);
        }
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên công việc',
            render: (_, value) => (
                <>{value.congviec.tenCViec}</>
            ),
            key: 'tenCViec',
        },
        {
            title: 'Tên Công Ty',
            key: '',
            dataIndex: 'tenCty',
            render: (_, value) => (
                <>{value.congviec.chinhanh.congty.tenCty}</>
            )
        },
        {
            title: 'Chi Nhánh',
            key: '',
            dataIndex: 'chinhanh',
            render: (_, value) => (
                <>{value.congviec.chinhanh.diachi.tenDiaChi}</>
            )
        },
        {
            title: 'Hạn Ứng tuyển',
            key: 'hanUngTuyen',
            dataIndex: 'hanUngTuyen',
            render: (_, value) => (
                <Tag color={value.congviec.trangThai === 'Còn hạn' ? 'green' : 'red'} key={value}>
                    {value.congviec.trangThai ? value.congviec.trangThai.toUpperCase() : ''}
                </Tag>
            ),
        },
        {
            title: 'Số lượng',
            key: 'soluong',
            render: (_, value) => (
                <>{value.congviec.soluong}</>
            )
        },
        {
            title: 'Trạng thái',
            key: 'trangThai',
            dataIndex: 'trangThai',
            render: (_, value) => (
                <Tag color={_ === 'Đã nộp' ? 'blue' : (_ === 'Đã nhận' ? 'green' : 'red')} key={value}>
                    {value ? _.toUpperCase() : ''}
                </Tag>
            ),
        },
    ];

    return (
        <>
            <UserHeader />
            <Container >
                <h3 style={{ margin: '40px 0' }}>Việc làm đã ứng tuyển</h3>
                
                {/* Thêm Select để lọc theo trạng thái */}
                <Select
                    placeholder="Lọc theo trạng thái"
                    style={{ width: 200, marginBottom: 20 }}
                    onChange={handleFilterChange}
                    allowClear
                >
                    <Option value="Đã nộp">Đã nộp</Option>
                    <Option value="Đã nhận">Đã nhận</Option>
                    <Option value="Từ chối">Từ chối</Option>
                </Select>

                <TableCustom columns={columns} data={filteredData} />
            </Container>
            <Footer />
        </>
    );
};

export default MyJob;
