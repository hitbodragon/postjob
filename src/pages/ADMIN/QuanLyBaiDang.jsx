import React, { useEffect } from 'react';
import { message, Tag, Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import { GetAllBaiDangService } from '../../ApiServices/ADMINService/getAllBaiDang';
import { XoaBaiDangService } from '../../ApiServices/ADMINService/XoaBaiDang';

const QuanLyALLBaiDang = () => {
    const { GetAllBaiDangResponse } = GetAllBaiDangService();
    const { XoaBaiDangError, callXoaBaiDangRefetch } = XoaBaiDangService();
    const navigate = useNavigate();


    const handleXoaBD = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn khóa bài đăng này?',
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
                callXoaBaiDangRefetch(id);
                // Hiển thị thông báo thành công với timer
                Swal.fire({
                    title: 'Đã khóa!',
                    text: 'Bài đăng đã được khóa thành công.',
                    icon: 'success',
                    timer: 3000, // Thời gian tự động đóng (3 giây)
                    timerProgressBar: true,
                    showConfirmButton: true,
                    confirmButtonText: 'OK'
                });
            }
        });
        
    };
    const handleChiTiet = (id) => {
        navigate(`/user/JobDetail/ ${id}`);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Công việc đã có người ứng tuyển!',
        });
    };

    useEffect(() => {
        if (XoaBaiDangError) {
            error();
        }
    }, [XoaBaiDangError]);


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên công việc',
            dataIndex: 'tenCViec',
            key: 'tenCViec',
        },
        {
            title: 'Tên Công Ty',
            key: '',
            dataIndex: 'chinhanh',
            render: (_,) => (
                <>{_.congty.tenCty}</>
            )
        },
        {
            title: 'Chi Nhánh',
            key: '',
            dataIndex: 'chinhanh',
            render: (_,) => (
                <>{_.diachi.tenDiaChi}</>
            )
        },
        {
            title: 'Hạn Ứng tuyển',
            key: 'hanUngTuyen',
            dataIndex: 'hanUngTuyen',

        },
        {
            title: 'Số lượng',
            key: 'soluong',
            dataIndex: 'soluong',

        },
        {
            title: 'Trạng thái',
            key: 'trangThai',
            dataIndex: 'trangThai',
            render: (_,) => (
                <Tag color={_ === 'Còn hạn' ? 'green' : 'red'} key={_}>
                    {_ ? _.toUpperCase() : ''}
                </Tag>
            ),

        },
        {
            title: 'Tác vụ',
            key: '',
            dataIndex: 'id',
            render: (_, value) => {
                return (
                    <>
                        <Button onClick={() => handleChiTiet(value.id)} style={{ marginRight: '10px' }}> Chi tiết</Button >
                        <Button danger onClick={() => handleXoaBD(value.id)}>Khóa</Button>
                    </>
                )
            },
        },
    ];


    return (
        <>
            {contextHolder}
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý tất cả bài đăng</h3>
                {GetAllBaiDangResponse ? <TableCustom columns={columns} data={GetAllBaiDangResponse.data} /> : ''}
            </Container>
        </>
    )
};
export default QuanLyALLBaiDang;