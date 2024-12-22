import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { faSearch, faTruckRampBox, faSearchLocation, faDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from 'react-router'
import Papa from 'papaparse';

import { GetAllChiNhanhService } from '../../ApiServices/GetDataApi/GetAllChiNhanh';
import { GetAllChuyenNganhService } from '../../ApiServices/GetDataApi/GetAllChuyenNganh';
import { TimKiemByTenService } from '../../ApiServices/TimKiem/TimKiemByTen';

import './SearchJob.css'

export const SearchJob = ({ GetAllCongViecRefetch }) => {
  const { GetAllChiNhanhResponse, GetAllChiNhanhRefetch } = GetAllChiNhanhService()
  const { GetAllChuyenNganhResponse } = GetAllChuyenNganhService();
  const { callTimKiemByTenRefetch, TimKiemByTenResponse } = TimKiemByTenService();

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [isDropdownSelected, setIsDropdownSelected] = useState(false); // Trạng thái theo dõi dropdown

  const [formData, setFormData] = useState({
    TenCViec: "",
    DiaChi: "",
    ChuyenNganh: "",
    Luong: "",
  });

  // Lọc danh sách chuyên ngành, chuyển về lowercase để kiểm tra trùng lặp
  const uniqueChuyenNganh = GetAllChuyenNganhResponse
    ? GetAllChuyenNganhResponse.data.reduce((acc, current) => {
        const lowerCaseName = current.tenChuyenNganh.toLowerCase();
        if (!acc.some(item => item.tenChuyenNganh.toLowerCase() === lowerCaseName)) {
          acc.push(current);
        }
        return acc;
      }, [])
    : [];

  // Xử lý khi submit form
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    // Kiểm tra nếu tất cả các trường đều là giá trị mặc định
    const isAllDefault = formData.DiaChi === "0" && formData.ChuyenNganh === "0" && formData.Luong === "0";

    // Kiểm tra nếu tên công việc trống
    if (!formData.TenCViec.trim()&& !isDropdownSelected) {
      callTimKiemByTenRefetch(''); // Gọi API với tên công việc trống
      setErrorMessage(TimKiemByTenResponse?.message);
      return;
    }

    // Kiểm tra nếu tên công việc trống
    // if (!formData.TenCViec.trim() && !isDropdownSelected) {
    //   setErrorMessage("Vui lòng nhập tên công việc");
    //   return;
    // }

    if (isAllDefault) {
      // Load lại trang khi chọn "Tất cả"
      navigate(`/user`);
      window.location.reload(); // Reload lại trang
      return;
    }

    // Tạo query string với các giá trị tìm kiếm
    const queryParams = [];

    if (formData.TenCViec) {
      queryParams.push(`tenCViec=${encodeURIComponent(formData.TenCViec)}`);
    }
    if (formData.DiaChi && formData.DiaChi !== "0") {
      queryParams.push(`diachiId=${formData.DiaChi}`);
    }
    if (formData.ChuyenNganh && formData.ChuyenNganh !== "0") {
      queryParams.push(`chuyenNganhId=${formData.ChuyenNganh}`);
    }
    if (formData.Luong && formData.Luong !== "0") {
      switch (formData.Luong) {
        case "1":
          queryParams.push(`minSalary=0&maxSalary=100`);
          break;
        case "2":
          queryParams.push(`minSalary=100&maxSalary=1000`);
          break;
        case "3":
          queryParams.push(`minSalary=1000&maxSalary=2000`);
          break;
        case "4":
          queryParams.push(`minSalary=2000&maxSalary=999999`);
          break;
        default:
          break;
      }
    }

    // Nối các query parameters thành chuỗi
    const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";

    // Chuyển hướng về trang /user với query string
    navigate(`/user${queryString}`);

    GetAllCongViecRefetch();
    setFormData({
      TenCViec: "",
      DiaChi: "",
      ChuyenNganh: "",
      Luong: "",
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // Xóa thông báo lỗi khi người dùng nhập lại tên công việc
    if (name === "TenCViec") {
      setErrorMessage("");
    }

    // Kiểm tra xem dropdown có được chọn không
    if (name === "DiaChi" && value !== "0") {
      setIsDropdownSelected(true);
    } else if (name === "ChuyenNganh" && value !== "0") {
      setIsDropdownSelected(true);
    } else if (name === "Luong" && value !== "0") {
      setIsDropdownSelected(true);
    } else if (name === "TenCViec" && value !== "") {
      setIsDropdownSelected(true);
    }

    // Nếu chọn "Tất cả ngành nghề", "Tất cả địa chỉ", hoặc "Tất cả mức lương", điều hướng về /user
    if (name === "DiaChi" && value === "0") {
      navigate(`/user`);
      window.location.reload();
    } else if (name === "ChuyenNganh" && value === "0") {
      navigate(`/user`);
      window.location.reload();
    } else if (name === "Luong" && value === "0") {
      navigate(`/user`);
      window.location.reload();
    } else if (name === "TenCViec" && value === "") {
      navigate(`/user`);
      window.location.reload();
    }
  };

  return (
    <div className='container'>
      <Form onSubmit={handleOnSubmit} className='FormSearch'>
        <Form.Group>
          <Form.Label>
            <FontAwesomeIcon icon={faSearch} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Control 
            onChange={handleChange} 
            name='TenCViec' 
            type="text" 
            placeholder="Tìm kiếm công việc tại đây..." 
            // disabled={isDropdownSelected}  // Disable input if dropdown is selected
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </Form.Group>
        <div>
          <Form.Label>
            <FontAwesomeIcon icon={faSearchLocation} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Select name='DiaChi' onChange={handleChange} aria-label="DiaChi">
            <option value={0}>Tất cả địa chỉ</option>
            {
              GetAllChiNhanhResponse 
                ? GetAllChiNhanhResponse.data
                    .filter(data => data.trangThai !== "1")
                    .map(data => (
                      <option key={data.id} value={data.id}>{data.tenDiaChi}</option>
                    ))
                : ''
            }
          </Form.Select>
        </div>
        <div>
          <Form.Label>
            <FontAwesomeIcon icon={faTruckRampBox} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Select name='ChuyenNganh' onChange={handleChange} aria-label="ChuyenNganh">
            <option value={0}>Tất cả ngành nghề</option>
            {uniqueChuyenNganh.map((chuyenNganh) => (
              <option key={chuyenNganh.id} value={chuyenNganh.id}>{chuyenNganh.tenChuyenNganh}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label>
            <FontAwesomeIcon icon={faDollar} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Select name='Luong' onChange={handleChange} aria-label="Luong">
            <option value={0} >Tất cả mức lương</option>
            <option value={1} >Dưới 100$</option>
            <option value={2} >Từ 100$ ~ 1000$</option>
            <option value={3} >Từ 1000$ ~ 2000$</option>
            <option value={4} >Trên 2000$ </option>
          </Form.Select>
        </div>
        <div>
          <Button type='submit' variant='success' className='Search--btn' size='md' block='true'>Tìm kiếm</Button>
        </div>
      </Form>
    </div >
  )
}
