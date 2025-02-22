import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { TThemDiaChiCTYService} from '../../../ApiServices/PostDataApi/ThemDiaChiCTY';

import './FormThemEmail.css'

export const FormThemDiaChi = ({setToggle,GetAllChiNhanhRefetch}) => {

const { TThemDiaChiCTYResponse, TThemDiaChiCTYIsLoading, TThemDiaChiCTYError, callTThemDiaChiCTYRefetch } = TThemDiaChiCTYService();
    useEffect(() => {
        if(TThemDiaChiCTYResponse){

            if(TThemDiaChiCTYResponse.success === true){
                alert('Thêm thành công');
                GetAllChiNhanhRefetch();
                setToggle(false);
            }
            else{
                alert('Lỗi rồi!');
            }
        }
    },[TThemDiaChiCTYResponse])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const themEmail = {
            tenDiaChi: data.tenDiaChi
        }
        callTThemDiaChiCTYRefetch(themEmail)
    };


    return (
        <div className='formThemEmail' onClick={(e)=> e.stopPropagation()}>
            <h5 className="ThemEmail_title">
                Thêm địa điểm hỗ trợ tuyển công việc
            </h5>
            <div className="ContentForm">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">Địa điểm:</label>
                    <input type='tenDiaChi' placeholder='Nhập tên địa chỉ'  {...register("tenDiaChi" , { required: true })} />
                    {errors.tenDiaChi && <span>Địa chỉ không được để trống!</span>}

                    <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                </form>
            </div>
        </div>
    )
}
