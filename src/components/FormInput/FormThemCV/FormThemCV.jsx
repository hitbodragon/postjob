import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// Call API Create Profile
import { TaoCVService } from '../../../ApiServices/PostDataApi/TaoCV';

import './FormThemCV.css';
import UserHeader from '../../user/userHeader/userHeader';

const FormThemCV = () => {
    const navigate = useNavigate();
    const { TaoCVResponse, callTaoCVRefetch } = TaoCVService();

    const handleCancle = () => {
        navigate('/user')
    };

    useEffect(() => {
        if (TaoCVResponse) {
            if(TaoCVResponse.success == true){
                // Success: Show success message and navigate to /user
                Swal.fire({
                    icon: 'success',
                    title: 'Thông báo',
                    text: TaoCVResponse.message,
                    timer: 3000,
                    timerProgressBar: true,
                    willClose: () => {
                        navigate('/user');
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: TaoCVResponse.message,
                    confirmButtonText: 'OK'
                });
            }
        }
        
    }, [TaoCVResponse]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const iduser = localStorage.getItem('iduser');

        // Create CV object to be submitted to the backend
        const editCV = {
            image_url: data.image_url,
            chuyenMon: data.chuyenMon,
            kyNangMem: data.kyNangMem,
            sdt: data.sdt,
            diaChi: data.diaChi,
            moTa: data.moTa,
            cccd: data.cccd,
            hocVan: data.hocVan,
            ten: data.ten,
            ho: data.ho,
            ngaySinh: data.ngaySinh,
            email: data.email,
            vitriUngTuyen: data.vitriUngTuyen,
            chungChi: data.chungChi,
            project: data.project,
            kinhNghiem: data.kinhNghiem,
            user: { "id": iduser }
        };

        // Submit the CV data
        callTaoCVRefetch(editCV);
    };

    return (
        <>
            <UserHeader />
            <Container className='ContainerFormEdit'>
                <div className="headerForm"><h2>Tạo CV</h2></div>
                <div className="ContentForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Email</label>
                        <input type='text' placeholder="Nhập email của bạn..." {...register("email")} />

                        <label>Họ</label>
                        <input type='text' placeholder="Nhập họ của bạn..." {...register("ho")} />

                        <label>Tên</label>
                        <input type='text' placeholder="Nhập tên của bạn..." {...register("ten")} />

                        <label>Ngày sinh</label>
                        <input type='date' {...register("ngaySinh")} />

                        <label>Địa chỉ</label>
                        <input type='text' placeholder="Nhập địa chỉ của bạn..." {...register("diaChi")} />

                        <label>Số điện thoại:</label>
                        <input type='text' placeholder="Nhập số điện thoại của bạn..." {...register("sdt")} />

                        <label>Căn cước công dân</label>
                        <input type='text' placeholder="Nhập căn cước công dân của bạn..." {...register("cccd")} />

                        <label htmlFor="">Trình độ học vấn</label>
                        <input type='text' placeholder="Nhập trình độ học vấn của bạn..." {...register("hocVan")} />

                        <label htmlFor="">Kỹ năng mềm</label>
                        <input type='text' placeholder="Nhập kỹ năng mềm của bạn..." {...register("kyNangMem")} />

                        <label htmlFor="">Kỹ năng chuyên môn</label>
                        <input type='text' placeholder="Nhập kỹ năng chuyên môn của bạn..." {...register("chuyenMon")} />

                        <label htmlFor="">Vị trí ứng tuyển</label>
                        <input type='text' placeholder="Nhập vị trí ứng tuyển của bạn..." {...register("vitriUngTuyen")} />

                        <label htmlFor="">Mô tả</label>
                        <input type='text' placeholder="Nhập mô tả của bạn..." {...register("moTa")} />

                        <label htmlFor="">Chứng chỉ đạt được</label>
                        <input type='text' placeholder="Nhập chứng chỉ đạt được của bạn..." {...register("chungChi")} />

                        <label htmlFor="">Dự án thực tế</label>
                        <input type='text' placeholder="Nhập dự án thực tế của bạn..." {...register("project")} />

                        <label htmlFor="">Kinh nghiệm làm việc</label>
                        <input type='text' placeholder="Nhập kinh nghiệm làm việc của bạn..." {...register("kinhNghiem")} />

                        <div>
                            <Button onClick={handleCancle} className='BtnCancelInformation' type="button">Hủy</Button>
                            <Button className='BtnSaveInformation' type="submit">Xác nhận</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    );
}

export default FormThemCV;
