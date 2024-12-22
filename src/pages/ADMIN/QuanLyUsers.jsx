import React, { useEffect } from 'react';
import { Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';
import Swal from 'sweetalert2';

import { GetAllUsersService } from '../../ApiServices/ADMINService/getAllUsers';
import { XoaUserService } from '../../ApiServices/ADMINService/XoaUser';

const QuanLyUser = () => {
    const { GetAllUsersResponse, GetAllUsersRefetch } = GetAllUsersService();
    const { XoaUserResponse, callXoaUserRefetch } = XoaUserService();
    let dataUsers = false;

    if (GetAllUsersResponse) {
        dataUsers = GetAllUsersResponse.data.filter((user) => {
            return user.role === 'USER';
        });
    }

    useEffect(() => {
        if(XoaUserResponse){
            GetAllUsersRefetch();
        }
    },[XoaUserResponse]);

    const handleXoa = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn khóa người dùng này?',
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
                callXoaUserRefetch(id);
                // Hiển thị thông báo thành công với timer
                Swal.fire({
                    title: 'Đã khóa!',
                    text: 'Người dùng đã được khóa thành công.',
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
            title: 'Username',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',

        },
        {
            title: 'Tác vụ',
            key: '',
            render: (_,) => (
                <Button danger onClick={()=>handleXoa(_.id)}>Khóa</Button>
            ),
        },
    ];


    return (
        <>
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý tài khoản ứng viên</h3>
                {dataUsers ? <TableCustom columns={columns} data={dataUsers} /> : ''}
            </Container>
        </>
    )
};
export default QuanLyUser;