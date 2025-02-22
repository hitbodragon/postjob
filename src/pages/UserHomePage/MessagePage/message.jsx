import React from "react"
import "./message.css"
import UserHeader from "../../../components/user/userHeader/userHeader"
import Footer from "../../../components/Footer/footer"

const Message = () => {

    return (
        <div className="message">
            <UserHeader />
            <main className="content">
                <div className="container p-0">

                    <h1 className="message-title h3 mb-3">Tin nhắn</h1>

                    <div className="card">
                        <div className="row g-0">
                            <div className="col-12 col-lg-5 col-xl-3 border-right">

                                <div className="px-4 d-none d-md-block">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <input type="text" className="form-control my-3" placeholder="Search..." />
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="badge bg-success float-right">5</div>
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Hồ Thái Đạt
                                            <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="badge bg-success float-right">2</div>
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="William Harris" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Đỗ Xuân Minh
                                            <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Văn Trung Tín
                                            <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Christina Mason" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Nguyễn Văn An
                                            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Fiona Green" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Trần Văn Bá
                                            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="Doris Wilder" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Lê Việt Hùng
                                            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Haley Kennedy" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Lại Minh Đức
                                            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="px-4 list-group-item list-group-item-action border-0">
                                    <div className="gap-20 d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3">
                                            Đỗ Văn Khoa
                                            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                        </div>
                                    </div>
                                </a>

                                <hr className="d-block d-lg-none mt-1 mb-0" />
                            </div>
                            <div className="col-12 col-lg-7 col-xl-9">
                                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                    <div className="gap-20 d-flex align-items-center py-1">
                                        <div className="position-relative">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                        </div>
                                        <div className="flex-grow-1 pl-3">
                                            <strong>Văn Trung Tín</strong>
                                            <div className="text-muted small"><em>Typing...</em></div>
                                        </div>
                                        <div>
                                            <button className="btn-color btn btn-primary btn-lg mr-1 px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
                                            <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
                                            <button className="btn btn-light border btn-lg px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="position-relative">
                                    <div className="chat-messages p-4">

                                        <div className="chat-message-right pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div className="font-weight-bold mb-1">You</div>
                                                Chào Tín, tôi là HR từ công ty Thái Nguyên.
                                                Chúng tôi đã nhận được hồ sơ của bạn và rất ấn tượng với kinh nghiệm cũng như kỹ năng của bạn.
                                                Tôi muốn mời bạn tham gia phỏng vấn cho vị trí Quản trị kinh doanh tại công ty. Bạn có thể cho tôi biết thời gian phù hợp để phỏng vấn không?
                                            </div>
                                        </div>

                                        <div className="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div className="font-weight-bold mb-1">Văn Trung Tín</div>
                                                Chào anh/chị HR, cảm ơn anh/chị đã liên hệ với em.
                                                Em rất vui khi nhận được lời mời phỏng vấn. Em có thể tham gia phỏng vấn vào 20/12/2024.
                                                Không biết thời gian này có phù hợp không ạ?
                                            </div>
                                        </div>

                                        <div className="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div className="font-weight-bold mb-1">You</div>
                                                Cảm ơn bạn đã phản hồi nhanh chóng. Thời gian 20/12/2024 hoàn toàn phù hợp. 
                                                Phỏng vấn sẽ được tổ chức trực tiếp tại văn phòng của công ty, bạn có cần chúng tôi hỗ trợ gì thêm trước khi buổi phỏng vấn diễn ra không?
                                            </div>
                                        </div>

                                        <div className="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div className="font-weight-bold mb-1">Văn Trung Tín</div>
                                                Cảm ơn anh/chị đã xác nhận. Em sẽ chuẩn bị mọi thứ để tham gia phỏng vấn đúng giờ.
                                                Anh/chị có thể cho em biết thêm về quy trình phỏng vấn và những người sẽ tham gia cùng em được không ạ?
                                            </div>
                                        </div>

                                        <div className="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:38 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div className="font-weight-bold mb-1">You</div>
                                                Buổi phỏng vấn sẽ kéo dài khoảng 30 phút, trong đó sẽ có phần giới thiệu về công ty, các câu hỏi về kỹ năng và kinh nghiệm của bạn, và một số câu hỏi tình huống.
                                                Ngoài tôi, sẽ có HR2 – quản lý bộ phận quản trị kinh doanh cùng tham gia phỏng vấn bạn. Bạn có thể chuẩn bị sẵn các câu hỏi về công ty hoặc công việc nếu cần. Chúng tôi rất mong được nghe thêm về bạn trong buổi phỏng vấn!
                                            </div>
                                        </div>

                                        <div className="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:39 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div className="font-weight-bold mb-1">Văn Trung Tín</div>
                                                Cảm ơn anh/chị đã chia sẻ thông tin. Em sẽ chuẩn bị thật kỹ càng cho buổi phỏng vấn.
                                                Em rất mong được gặp anh/chị và HR2 để trao đổi thêm về cơ hội công việc tại công ty Thái Nguyên.
                                            </div>
                                        </div>

                                        <div className="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:40 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div className="font-weight-bold mb-1">You</div>
                                                Chúng tôi cũng rất mong được gặp bạn trong buổi phỏng vấn.
                                                Nếu bạn có bất kỳ câu hỏi nào trước buổi phỏng vấn, đừng ngần ngại liên hệ với tôi. Chúc bạn một ngày làm việc hiệu quả!
                                            </div>
                                        </div>

                                        <div className="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:42 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div className="font-weight-bold mb-1">Văn Trung Tín</div>
                                                Cảm ơn anh/chị, em sẽ liên hệ nếu cần thêm thông tin. Hẹn gặp lại trong buổi phỏng vấn!
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex-grow-0 py-3 px-4 border-top">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Type your message" />
                                        <button className="btn-color btn btn-primary">Send</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Message