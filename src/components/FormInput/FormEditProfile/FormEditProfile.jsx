import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// Call API Create Profile ,create Information
import { EditCVService } from '../../../ApiServices/PostDataApi/SuaCV';
import './FormEditProfile.css';

const FormEditProfile = ({ getCVByIDRefetch, getCVByIDResponse, editProfile }) => {
    const navigate = useNavigate();
    const { EditCVResponse, callEditCVRefetch, EditCVError } = EditCVService();

    useEffect(() => {
        if (EditCVResponse) {
            if (EditCVResponse.success === false) {

                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: EditCVResponse.message,
                    confirmButtonText: 'OK'
                });
                
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Thông báo',
                    text: EditCVResponse.message,
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    timer: 3000, // Thông báo tự động đóng sau 3 giây
                    timerProgressBar: true,
                }).then(() => {
                    // Sau khi thông báo hoàn tất, thực hiện các hành động cần thiết
                    getCVByIDRefetch();
                    editProfile();
                    // navigate('/user');
                });
            }
        }
    }, [EditCVResponse]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: getCVByIDResponse
    });

    const onSubmit = data => {
        const editCV = {
            image_url: '',
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
            chungChi: data.chungChi,
            vitriUngTuyen: data.vitriUngTuyen,
            project: data.project,
            kinhNghiem: data.kinhNghiem,
        };
        callEditCVRefetch(editCV);
    };

    return (
        <Container className='ContainerFormEdit'>
            <div className="headerForm"><h2>SỬA THÔNG TIN CV</h2></div>
            <div className="ContentForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Email</label>
                    <input type='text' readOnly defaultValue={getCVByIDResponse.email} {...register("email")} />

                    <label>Họ</label>
                    <input type='text' defaultValue={getCVByIDResponse.ho} {...register("ho")} />

                    <label>Tên</label>
                    <input type='text' defaultValue={getCVByIDResponse.ten} {...register("ten")} />

                    <label>Ngày sinh</label>
                    <input type='date' defaultValue={getCVByIDResponse.ngaySinh} {...register("ngaySinh")} />

                    <label>Địa chỉ</label>
                    <input type='text' defaultValue={getCVByIDResponse.diaChi} {...register("diaChi")} />

                    <label>Số điện thoại:</label>
                    <input type='text' defaultValue={getCVByIDResponse.sdt} {...register("sdt")} />

                    <label>Căn cước công dân</label>
                    <input type='text' defaultValue={getCVByIDResponse.cccd} {...register("cccd")} />

                    <label htmlFor="">Trình độ học vấn</label>
                    <input type='text' defaultValue={getCVByIDResponse.hocVan} {...register("hocVan")} />

                    <label htmlFor="">Kỹ năng mềm</label>
                    <input type='text' defaultValue={getCVByIDResponse.kyNangMem} {...register("kyNangMem")} />

                    <label htmlFor="">Kỹ năng chuyên môn</label>
                    <input type='text' defaultValue={getCVByIDResponse.chuyenMon} {...register("chuyenMon")} />

                    <label htmlFor="">Vị trí ứng tuyển</label>
                    <input type='text' defaultValue={getCVByIDResponse.vitriUngTuyen} {...register("vitriUngTuyen")} />

                    <label htmlFor="">Mô tả</label>
                    <input type='text' defaultValue={getCVByIDResponse.moTa} {...register("moTa")} />

                    <label htmlFor="">Chứng chỉ đạt được</label>
                    <input type='text' defaultValue={getCVByIDResponse.chungChi} {...register("chungChi")} />

                    <label htmlFor="">Dự án thực tế</label>
                    <input type='text' defaultValue={getCVByIDResponse.project} {...register("project")} />

                    <label htmlFor="">Kinh nghiệm làm việc</label>
                    <input type='text' defaultValue={getCVByIDResponse.kinhNghiem} {...register("kinhNghiem")} />

                    <div>
                        <Button onClick={editProfile} className='BtnCancelInformation' type="button">Hủy</Button>
                        <Button className='BtnSaveInformation' type="submit">Xác nhận</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default FormEditProfile;
