import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// Call API Create Profile ,create Information
import { ThemCongTyService } from '../../../ApiServices/PostDataApi/ThemCongTy';
import { EditCongTyService } from '../../../ApiServices/PostDataApi/SuaCongTy';
import { GetAllChiNhanhService } from '../../../ApiServices/GetDataApi/GetAllChiNhanh';
import { GetCTYByHRService } from "../../../ApiServices/GetDataApi/getMyCongTy";

import './FormThemCongTy.css';
import UserHeader from '../../user/userHeader/userHeader';

const FormThemCongTy = ({ setToggle, editingData }) => {
    const navigate = useNavigate();

    const { ThemCongTyResponse, ThemCongTyIsLoading, ThemCongTyError, callThemCongTyRefetch } = ThemCongTyService();
    const { EditCongTyResponse, EditCongTyIsLoading, EditCongTyError, callEditCongTyRefetch } = EditCongTyService();
    const { GetAllChiNhanhResponse, GetAllChiNhanhIsLoading, GetAllChiNhanhError, GetAllChiNhanhRefetch } = GetAllChiNhanhService();
    const { GetCTYByHRResponse, GetCTYByHRRefetch, isLoading, error } = GetCTYByHRService();

    const handleCancle = () => {
        setToggle(false);
    };

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    // Thiết lập giá trị mặc định cho form khi chỉnh sửa công ty
    useEffect(() => {
        if (editingData) {
            setValue("tenCty", editingData.tenCty);
            setValue("tenChuyenNganh", editingData.tenChuyenNganh);
            setValue("tenDiaChi", editingData.id);  // Lưu tên chi nhánh vào trường tenDC
        }
        console.log(editingData)
    }, [editingData, setValue]);

    const onSubmit = data => {
        const iduser = localStorage.getItem('iduser');
        const addCTY = {
            congTy: {
                tenCty: data.tenCty,
                user: { id: iduser }
            },
            chuyenNganh: {
                tenChuyenNganh: data.tenChuyenNganh
            },
            chiNhanh: {
                diachi: { id: data.tenDiaChi }
            }
        };

        if (editingData) {
            // Gọi API để chỉnh sửa thông tin công ty
            callEditCongTyRefetch(addCTY);
        } else {
            // Gọi API để thêm công ty mới
            callThemCongTyRefetch(addCTY);
        }
    };

    useEffect(() => {
        if (ThemCongTyResponse) {
            Swal.fire({
                icon: 'success',
                title: 'Thêm công ty thành công',
                text: 'Thông tin công ty của bạn đã được thêm.',
                confirmButtonText: 'OK'
            }).then(() => {
                setToggle(true);
                GetCTYByHRRefetch();
                window.location.reload(); // Reload lại trang để hiển thị dữ liệu mới
            });
        } else if (ThemCongTyError) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: 'Bạn chỉ được tạo 1 công ty',
                confirmButtonText: 'OK'
            });
        }

        if (EditCongTyResponse) {
            Swal.fire({
                icon: 'success',
                title: 'Cập nhật công ty thành công',
                text: 'Thông tin công ty của bạn đã được cập nhật.',
                confirmButtonText: 'OK'
            }).then(() => {
                setToggle(true);
                GetCTYByHRRefetch();
                window.location.reload(); // Reload lại trang để hiển thị dữ liệu mới
            });
        } else if (EditCongTyError) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: 'Có lỗi xảy ra khi cập nhật công ty',
                confirmButtonText: 'OK'
            });
        }
    }, [ThemCongTyResponse, ThemCongTyError, EditCongTyResponse, EditCongTyError]);

    return (
        <>
            <UserHeader />
            <Container className='ContainerFormEdit'>
                <div className="headerForm">
                    <h4>
                        {editingData ? 'Chỉnh sửa thông tin công ty' : 'Tạo thông tin công ty'}
                    </h4>
                </div>
                <div className="ContentForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Tên công ty</label>
                        <input type='text' {...register("tenCty", { required: true })} />
                        {errors.tenCty && <span>Tên công ty không được trống</span>}

                        <label htmlFor="">Chi nhánh tuyển</label>
                        <select {...register("tenDiaChi", { required: true })}>
                            {GetAllChiNhanhResponse ? GetAllChiNhanhResponse.data
                                .filter(value => value.trangThai === "0") // Lọc các địa chỉ có TrangThai = "0"
                                .map((value) => (
                                    <option 
                                        key={value.id} 
                                        value={value.id} 
                                        selected={editingData && editingData.tenDiaChi === value.tenDiaChi} // Chọn đúng chi nhánh hiện tại
                                    >
                                        {value.tenDiaChi}
                                    </option>
                                )) : <option value="">Không có chi nhánh</option>}
                        </select>
                        {GetAllChiNhanhError && <div><span style={{ color: 'red' }}>Không thể tải chi nhánh</span></div>}

                        <label htmlFor="">Lĩnh vực kinh doanh</label>
                        <input type='text' {...register("tenChuyenNganh", { required: true })} />
                        {errors.tenChuyenNganh && <div><span>Tên chuyên ngành không được trống</span></div>}

                        <Button onClick={handleCancle} className='BtnCancelInformation'> Hủy </Button>
                        <Button className='BtnSaveInformation' type="submit">Xác nhận</Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default FormThemCongTy;
