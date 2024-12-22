import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';
import Swal from 'sweetalert2';

import { GetAllChiNhanhService } from '../../ApiServices/GetDataApi/GetAllChiNhanh';
import { FormThemDiaChi } from '../../components/FormInput/FormThemDiaChi/FormThemDiaChi';
import { XoaDCService } from '../../ApiServices/ADMINService/XoaDC';

const QuanLyDiaChiCTY = () => {
    const { GetAllChiNhanhResponse, GetAllChiNhanhRefetch } = GetAllChiNhanhService();
    const [toggle, setToggle] = useState();
    const { XoaDCResponse, callXoaDCRefetch } = XoaDCService();

    useEffect(() => {
        if(XoaDCResponse){
            GetAllChiNhanhRefetch();
        }
    },[XoaDCResponse]);
    
    const handleXoa = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn khóa địa chỉ này?',
            text: "Thao tác này không thể hoàn tác!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                // Gọi API khóa nếu người dùng xác nhận
                callXoaDCRefetch(id);
                // Hiển thị thông báo thành công với timer
                Swal.fire({
                    title: 'Đã khóa!',
                    text: 'Địa chỉ đã được khóa thành công.',
                    icon: 'success',
                    timer: 3000, // Thời gian tự động đóng (3 giây)
                    timerProgressBar: true,
                    showConfirmButton: true,
                    confirmButtonText: 'OK'
                });
            }
        });
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'tenDiaChi',
            key: 'tenDiaChi',
        },
        {
            title: 'Tác vụ',
            key: '',
            render: (_,) => (
                <Button danger onClick={()=>handleXoa(_.id)}>Khóa</Button>
            ),
        },
    ];

    // Lọc dữ liệu để chỉ hiển thị địa chỉ có TrangThai = "0"
    const filteredData = GetAllChiNhanhResponse ? GetAllChiNhanhResponse.data.filter(diachi => diachi.trangThai === "0") : [];

    return (
        <>
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý địa chỉ công ty</h3>
                <Button onClick={() => setToggle(true)} style={{ margin: '0px 0 20px' }}>Thêm Địa chỉ</Button>
                {filteredData.length > 0 ? <TableCustom columns={columns} data={filteredData} /> : <p><i>Không có địa chỉ nào hiển thị</i></p>}
            </Container>
            {toggle ?
                (<div className='modalForm' onClick={() => setToggle(false)}>
                    <FormThemDiaChi GetAllChiNhanhRefetch={GetAllChiNhanhRefetch} setToggle={setToggle} />
                </div>) : ''
                }
        </>
    )
};
export default QuanLyDiaChiCTY;