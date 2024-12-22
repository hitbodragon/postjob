import React, { useEffect } from 'react';
import { Space, Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';
import Swal from 'sweetalert2';

import { GetAllCVUsersService } from '../../ApiServices/ADMINService/getCVUsers';
import { XoaCVUserService } from '../../ApiServices/ADMINService/XoaCVUser';

const QuanLyAllCV = () => {

    const { GetAllCVUsersResponse, GetAllCVUsersRefetch } = GetAllCVUsersService();
    const { callXoaCVRefetch } = XoaCVUserService();

    const handleXoaCV = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn khóa hồ sơ của ứng viên này?',
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
                callXoaCVRefetch(id);
                GetAllCVUsersRefetch();
                // Hiển thị thông báo thành công với timer
                Swal.fire({
                    title: 'Đã khóa!',
                    text: 'Hồ sơ ứng viên đã được khóa thành công.',
                    icon: 'success',
                    timer: 3000, // Thời gian tự động đóng (3 giây)
                    timerProgressBar: true,
                    showConfirmButton: true,
                    confirmButtonText: 'OK'
                });
            }
        });
        
    };
    console.log(GetAllCVUsersResponse);


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Username',
            key: '',
            render: (_,) => {
                if (_.user) {
                    return (<a >{_.user.userName}</a>)
                }
            }
        },
        {
            title: 'Họ',
            dataIndex: 'ho',
            key: 'ho',
        },
        {
            title: 'Tên',
            key: 'ten',
            dataIndex: 'ten',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Vị trí ứng tuyển',
            dataIndex: 'vitriUngTuyen',
            key: 'vitriUngTuyen',
        },
        {
            title: 'Tác vụ',
            key: '',
            render: (_,) => (
                <Button danger onClick={() => (handleXoaCV(_.id))}>Khóa</Button>
            ),
        },
    ];


    return (
        <>
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý hồ sơ ứng viên</h3>
                {GetAllCVUsersResponse ? <TableCustom columns={columns} data={GetAllCVUsersResponse.data} /> : ''}
            </Container>
        </>
    )
};
export default QuanLyAllCV;