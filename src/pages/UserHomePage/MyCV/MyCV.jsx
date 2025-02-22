import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

import UserDetail from '../../../components/user/userProfile/userdetail'
import UserHeader from '../../../components/user/userHeader/userHeader'
import Footer from '../../../components/Footer/footer'
import FormEditProfile from '../../../components/FormInput/FormEditProfile/FormEditProfile'

//call API User
import { GetCVByIDService } from '../../../ApiServices/AuthService/getCVByID'
import FormThemCV from '../../../components/FormInput/FormThemCV/FormThemCV'
import getCVUserService from '../../../ApiServices/ADMINService/getCVUsers'

export const MyCV = () => {

  const { getCVByIDResponse, getCVByIDRefetch } = GetCVByIDService();

  const [editProfile, setEditProfile] = useState(false);

  const handleOnclickEditProfile = () => {
    setEditProfile(!editProfile);
  }

  return (
    <>
      <UserHeader />
      {getCVByIDResponse ?
        ( getCVByIDResponse.success ?
          (editProfile ?
            <FormEditProfile 
              getCVByIDRefetch={getCVByIDRefetch} 
              getCVByIDResponse = {getCVByIDResponse.success ? getCVByIDResponse.data[0] : ''} 
              editProfile={handleOnclickEditProfile}
            /> 
            :
            <UserDetail 
              getCVByIDResponse = {getCVByIDResponse.success ? getCVByIDResponse.data[0] : ''} 
              editProfile={handleOnclickEditProfile}
            />) : <FormThemCV/>
        ) : ''
      }
      <Footer />
    </>
  )
}
