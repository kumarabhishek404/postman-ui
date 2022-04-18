import react, { useState } from 'react';

const Body = () => {

  return (
    <div className='container h-100 d-flex flex-column p-0 m-0'>
      <div className='body_container_1 w-100 d-flex justify-content-between'>
        <div className='body_container_1_box_1 w-75 d-flex align-items-center'>
          <div className='body_container_1_box_1_1 d-flex mr-1'>
            <p className='p-0 m-0 text-success'>GET</p>
            <p className='p-0 m-0'>https://jsonplaceholder.typicode.com/posts/1/comments</p>
          </div>
          <div className='body_container_1_box_1_2 d-flex align-items-center'>
            <p className='m-0 p-0 mx-3'>
              <span>
                <i color="content-color-primary" class="IconWrapper__IconContainer-r96cto-0 gOCaXE requester-tab-create-icon pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 7.5V2H7.5V7.5H2V8.5H7.5V14H8.5V8.5H14V7.5H8.5Z" fill="#505050"></path></svg></i>
              </span>
            </p>
            <p className='m-0 p-0'>
              <span>
                <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF requester-tab-options-icon pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
              </span>
            </p>
          </div>
        </div>
        <div className='body_container_1_up_text_box_2 w-25 d-flex justify-content-between align-items-center'>
          <div className='body_container_1_up_text w-100 mx-2 d-flex justify-content-between align-items-center'>
            <p className='p-0 m-0'>No Environment</p>
            <span>
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#6B6B6B"></path></svg></i>
            </span>
          </div>
          <div className='mx-3'>
            <span>
              <i color="content-color-secondary" class="IconWrapper__IconContainer-r96cto-0 knlUgT environment-preview-icon pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.5C11 9.15685 9.65685 10.5 8 10.5C6.34315 10.5 5 9.15685 5 7.5C5 5.84315 6.34315 4.5 8 4.5C9.65685 4.5 11 5.84315 11 7.5ZM10 7.5C10 8.60457 9.10457 9.5 8 9.5C6.89543 9.5 6 8.60457 6 7.5C6 6.39543 6.89543 5.5 8 5.5C9.10457 5.5 10 6.39543 10 7.5Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C3 13 0 7.5 0 7.5C0 7.5 2.5 2 8 2C13.5 2 16 7.5 16 7.5C16 7.5 13 13 8 13ZM1.326 7.16831C1.25893 7.27628 1.20003 7.37554 1.14922 7.46407C1.21158 7.5599 1.28434 7.6686 1.36727 7.78758C1.70216 8.26807 2.19631 8.9071 2.83211 9.54289C4.12103 10.8318 5.88062 12 8 12C10.1194 12 11.879 10.8318 13.1679 9.54289C13.8037 8.9071 14.2978 8.26807 14.6327 7.78758C14.7157 7.6686 14.7884 7.5599 14.8508 7.46407C14.8 7.37554 14.7411 7.27628 14.674 7.16831C14.3805 6.69592 13.9369 6.06672 13.3391 5.44048C12.1412 4.1855 10.3853 3 8 3C5.6147 3 3.85878 4.1855 2.66086 5.44048C2.06308 6.06672 1.61946 6.69592 1.326 7.16831Z" fill="#6B6B6B"></path></svg></i>
            </span>
          </div>
        </div>
      </div>
      <div className='body_container_2 d-flex w-100'>
        <div className='body_box_1'>
          <div className='body_box_up w-100 d-flex justify-content-between align-items-center'>
            <div className='w-75'>
              <p className='p-0 m-0 ml-3'>https://jsonplaceholder.typicode.com/posts/1/comments</p>
            </div>
            <div className='w-25 d-flex justify-content-between mr-3'>
              <div></div>
              <div className='d-flex float-right'>
                <button className='d-flex body_box_1_btn_save justify-content-between align-items-center mr-3'>
                  <div className='mr-2'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1 1.44772 1.44771 1 2 1H10.7929C11.0581 1 11.3125 1.10536 11.5 1.29289L14.7071 4.5C14.8946 4.68754 15 4.94189 15 5.20711V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2ZM10.7929 2H9V4C9 4.55228 8.55228 5 8 5H5C4.44772 5 4 4.55228 4 4V2L2 2V14L4 14L4 10C4 9.44772 4.44772 9 5 9H11C11.5523 9 12 9.44771 12 10V14H14V5.20711L10.7929 2ZM11 14L11 10H5L5 14L11 14ZM5 2H8V4H5V2Z" fill="#707070"></path></svg>
                  </div>
                  <span className='mr-1'>
                    Save
                  </span>
                  <span className=''>
                    <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#6B6B6B"></path></svg></i>
                  </span>
                </button>
                <button className='body_box_1_btn'>
                  <span className='d-flex'>
                    <div className='body_box_1_btn_container mr-2 bg-light'>
                      <span class="plugin__workspace-view-active-item"><i class="IconWrapper__IconContainer-r96cto-0 gJkKrF request-meta__mode-switcher__icon active pm-icon pm-icon-normal" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5592 1.35352C12.9734 0.767737 12.0237 0.767739 11.4379 1.35352L1.64502 11.1464C1.57133 11.2201 1.5225 11.315 1.50537 11.4178L1.02839 14.2797C0.960706 14.6858 1.31277 15.0378 1.71886 14.9702L4.58077 14.4932C4.68356 14.476 4.77843 14.4272 4.85212 14.3535L14.645 4.56063C15.2308 3.97484 15.2308 3.0251 14.645 2.43931L13.5592 1.35352ZM12.145 2.06063C12.3403 1.86537 12.6569 1.86537 12.8521 2.06063L13.9379 3.14642C14.1332 3.34168 14.1332 3.65826 13.9379 3.85352L12.1057 5.68576L10.3128 3.89287L12.145 2.06063ZM9.60568 4.59997L2.46542 11.7402L2.10685 13.8917L4.25832 13.5331L11.3986 6.39287L9.60568 4.59997Z" fill="#4F4F4F"></path></svg></i></span>
                    </div>
                    <div className='body_box_1_btn_container'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5H4V4H12V5Z" fill="#6B6B6B"></path><path d="M4 8H10V7H4V8Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13H14C14.5523 13 15 12.5523 15 12V2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44771 1 2V12C1 12.5523 1.44772 13 2 13H4L5.85858 14.8586C5.93668 14.9367 6.06332 14.9367 6.14142 14.8586L8 13ZM7.58579 12H14V2H2L2 12H4.41421L6 13.5858L7.58579 12Z" fill="#6B6B6B"></path></svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>

          </div>
          <div className='body_box_mid w-100 d-flex flex-column'>
            <div className='body_box_mid_1 w-100 mb-2'>
              <div className='d-flex justify-content-between w-100 '>
                <div className='body_box_mid_1_box d-flex w-100'>
                  <div className='body_box_mid_1_select w-25 d-flex justify-content-between align-items-center'>
                    <p className='p-0 m-0'>
                      GET
                    </p>
                    <span>
                      <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#6B6B6B"></path></svg></i>
                    </span>
                  </div>
                  <div className='body_box_mid_1_input w-100 mr-2'>
                    <input className='w-100' value='https://jsonplaceholder.typicode.com/posts/1/comments' />
                  </div>
                </div>
                <div className='body_box_mid_1_button mr-1'>
                  <button className='px-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span className='body_box_mid_1_button_send py-1'>
                        Send
                      </span>
                      <span className='body_box_mid_1_button_send_icon p-0 m-0 w-100 h-100 ml-3 pl-2'>
                        <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#fff"></path></svg></i>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='body_box_mid_2 w-100 d-flex justify-content-between mb-3'>

              <div className='body_box_mid_2_tabs d-flex'>
                <p className='body_box_mid_2_tabs_item'>
                  <span className='text_params'>Params</span>
                </p>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Authorization</span>
                </p>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Headers</span>
                </p>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Body</span>
                </p>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Pre-request Script</span>
                </p>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Tests</span>
                </p>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Settings</span>
                </p>
              </div>

              <div className='body_box_mid_2_cokkie'>
                <p className='body_box_mid_2_tabs_item'>
                  <span>Cookies</span>
                </p>
              </div>

            </div>

            <div className='body_box_mid_3 d-flex justify-content-between'>
              <div className=''>
                <p className='p-0 mb-2'>Query Params</p>
              </div>
              <div></div>
            </div>
            <div className='body_box_mid_4'>
              <table className='body_box_mid_4_table w-100'>
                <tr>
                  <th></th>
                  <th className='body_box_mid_4_table_head'>KEY</th>
                  <th className='body_box_mid_4_table_head'>VALUE</th>
                  <th className='body_box_mid_4_table_head '>
                    <p className='m-0 p-0 w-100'>
                      DESCRIPTION
                    </p>
                    {/* <div className='d-flex'>
                      <span>
                        <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF key-value-column-toggle--button" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
                      </span>
                      <p className='p-0 m-0'>Bulk Edit</p>
                    </div> */}
                  </th>
                </tr>
                <tr className='border border-right-light'>
                  <td className='border border-left-0 border border-right-0'>  </td>
                  <td>Key</td>
                  <td>Value</td>
                  <td className=''>Description</td>
                </tr>
                <tr>
                </tr>
              </table>
            </div>
          </div>
          <div className='body_box_lower w-100 d-flex flex-column'>

            <div className='body_box_lower_1 w-100 d-flex justify-content-between'>

              <div className='body_box_lower_1_tabs d-flex'>
                <p className='body_box_lower_1_tabs_item text_body'>
                  <span>Body</span>
                </p>
                <p className='body_box_lower_1_tabs_item'>
                  <span>Cookies</span>
                </p>
                <p className='body_box_lower_1_tabs_item'>
                  <span>Headers</span>
                </p>
                <p className='body_box_lower_1_tabs_item'>
                  <span>Test Results</span>
                </p>
              </div>

              <div className='body_box_lower_1_response d-flex align-items-center'>
                <div className='body_box_lower_1_response_text d-flex'>
                  <p>Status:<span> 200 OK</span></p>
                  <p>Time:<span> 414 ms</span></p>
                  <p>Size:<span> 2.53 KB</span></p>

                </div>
                <p className='body_box_lower_1_tabs_item'>
                  <span>Save Response</span>
                  <span>
                    <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#0000ff"></path></svg></i>
                  </span>
                </p>
              </div>
            </div>

            <div className='body_box_lower_2 pl-2'>
              <div className='body_box_lower_2 w-100 mt-2 d-flex justify-content-between'>

                <div className='body_box_lower_2_tabs d-flex'>
                  <p className='body_box_lower_2_tabs_item p-0 m-0 px-3 rounded-left'>
                    <span>Pretty</span>
                  </p>
                  <p className='body_box_lower_2_tabs_item p-0 m-0 px-3'>
                    <span>Raw</span>
                  </p>
                  <p className='body_box_lower_2_tabs_item p-0 m-0 px-3'>
                    <span>Preview</span>
                  </p>
                  <p className='body_box_lower_2_tabs_item p-0 m-0 px-3 rounded-right'>
                    <span>Visualize</span>
                  </p>
                  
                  <p className='body_box_lower_2_tabs_item_text rounded-right rounded-left'>
                    <span className='mr-2'>Text</span>
                    <span>
                      <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF dropdown-caret" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#6B6B6B"></path></svg></i>
                    </span>
                  </p>
                  <p className='body_box_lower_2_tabs_item rounded-right rounded-left'>
                    <span>
                      <i class="IconWrapper__IconContainer-r96cto-0 hhTAnp aether-button__left-icon" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 3H1V2H15V3Z" fill="#d3480e"></path><path d="M12 8H1V7H12C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13H9.70712L11.3536 14.6464L10.6465 15.3536L7.79291 12.5L10.6465 9.64645L11.3536 10.3536L9.70712 12H12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d3480e"></path><path d="M1 13H6V12H1V13Z" fill="#d3480e"></path></svg></i>
                    </span>
                  </p>
                </div>

                <div className='body_box_lower_2_response d-flex justify-content-between align-items-center'>
                  <div className='mx-2'>
                    <p>
                      <span>
                        <i class="IconWrapper__IconContainer-r96cto-0 hhTAnp aether-button__left-icon" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5C2 9.77614 2.22386 10 2.5 10H3V11H2.5C1.67157 11 1 10.3284 1 9.5V2.5C1 1.67157 1.67157 1 2.5 1H9.5C10.3284 1 11 1.67157 11 2.5V3H10V2.5C10 2.22386 9.77614 2 9.5 2H2.5C2.22386 2 2 2.22386 2 2.5V9.5Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 5C5.67157 5 5 5.67157 5 6.5V13.5C5 14.3284 5.67157 15 6.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.5C15 5.67157 14.3284 5 13.5 5H6.5ZM6 6.5C6 6.22386 6.22386 6 6.5 6H13.5C13.7761 6 14 6.22386 14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H6.5C6.22386 14 6 13.7761 6 13.5V6.5Z" fill="#6B6B6B"></path></svg></i>
                      </span>
                    </p>
                  </div>
                  <div className='mx-3'>
                    <p>
                      <span>
                        <i class="IconWrapper__IconContainer-r96cto-0 hhTAnp aether-button__left-icon" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.87147 9.16437C10.5768 8.30243 11 7.20063 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.20063 11 8.30243 10.5768 9.16437 9.87147L9.89648 10.6036L9.64648 10.8536L13.5758 14.7829C13.8101 15.0172 14.19 15.0172 14.4243 14.7829L14.7829 14.4243C15.0172 14.19 15.0172 13.8101 14.7829 13.5758L10.8536 9.64648L10.6036 9.89648L9.87147 9.16437ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" fill="#6B6B6B"></path></svg></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

            </div>


            {/* <div class="response-viewer-empty__onboarding">

              <div class="response-viewer-empty__onboarding__heading">Enter the URL and click Send to get a response</div>
            </div> */}
          </div>
        </div>
        <div className='body_box_2'>
          <div className='my-3'>
            <span>
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.47435 14.1581L10.4743 2.15812L9.52566 1.84189L5.52566 13.8419L6.47435 14.1581Z" fill="#6B6B6B"></path><path d="M3.62373 3.67075L0.181352 7.6049C-0.016587 7.83111 -0.0165865 8.16889 0.181352 8.3951L3.62373 12.3293L4.37631 11.6707L1.16441 8L4.37631 4.32925L3.62373 3.67075Z" fill="#6B6B6B"></path><path d="M12.3763 3.67075L15.8187 7.6049C16.0166 7.83111 16.0166 8.16889 15.8187 8.3951L12.3763 12.3293L11.6237 11.6707L14.8357 8L11.6237 4.32925L12.3763 3.67075Z" fill="#6B6B6B"></path></svg></i>
            </span>
          </div>
          <div className='my-3'>
            <span>
              <i class="IconWrapper__IconContainer-r96cto-0 gJkKrF" title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6159 2.67993L6.25258 5.51591C5.92691 5.90671 6.20481 6.50002 6.71351 6.50002H8.43249L6.6159 8.67993L7.38412 9.32012L9.74744 6.48413C10.0731 6.09334 9.79521 5.50002 9.2865 5.50002H7.56753L9.38412 3.32012L8.6159 2.67993Z" fill="#6B6B6B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 15H6V16H10V15H11V11.277C11 11.185 11.0248 11.0988 11.069 11.0278C11.4127 10.4759 11.7274 10.0452 12.0103 9.6707C12.0669 9.59577 12.1231 9.52203 12.1786 9.44928C12.3947 9.16574 12.5996 8.89686 12.773 8.6318C13.2386 7.91999 13.5 7.20351 13.5 6C13.5 2.701 11.372 0 8 0C4.62798 0 2.5 2.701 2.5 6C2.5 7.20351 2.76139 7.91999 3.22704 8.6318C3.40046 8.8969 3.60507 9.16538 3.82119 9.44897C3.87664 9.52173 3.93305 9.59575 3.98969 9.6707C4.27264 10.0452 4.58734 10.4759 4.93099 11.0278C4.97523 11.0988 5 11.185 5 11.277V15ZM8 1C5.29689 1 3.5 3.12895 3.5 6C3.5 7.01267 3.70666 7.53829 4.06388 8.08435C4.21574 8.31649 4.39191 8.54777 4.60441 8.82676C4.66264 8.9032 4.7236 8.98323 4.78752 9.06783C5.07928 9.45393 5.41384 9.91139 5.77986 10.4992C5.92723 10.7358 6 11.0065 6 11.277V12H10V11.277C10 11.0065 10.0728 10.7358 10.2201 10.4992C10.5862 9.91139 10.9207 9.45393 11.2125 9.06783C11.276 8.98372 11.3366 8.90414 11.3946 8.8281L11.3956 8.82676C11.6081 8.54778 11.7843 8.31649 11.9361 8.08435C12.2933 7.53829 12.5 7.01267 12.5 6C12.5 3.12895 10.7031 1 8 1ZM10 14V13H6V14H10Z" fill="#6B6B6B"></path><path d="M16 7H14.5V6H16V7Z" fill="#6B6B6B"></path><path d="M14.1581 4.22432L15.6581 3.72432L15.3419 2.77563L13.8419 3.27563L14.1581 4.22432Z" fill="#6B6B6B"></path><path d="M13.8419 9.47432L15.3419 9.97432L15.6581 9.02563L14.1581 8.52563L13.8419 9.47432Z" fill="#6B6B6B"></path><path d="M1.5 6H0V7H1.5V6Z" fill="#6B6B6B"></path><path d="M0.341914 9.02568L1.84191 8.52568L2.15814 9.47437L0.658142 9.97437L0.341914 9.02568Z" fill="#6B6B6B"></path><path d="M0.658086 2.77568L2.15809 3.27568L1.84186 4.22437L0.341858 3.72437L0.658086 2.77568Z" fill="#6B6B6B"></path></svg></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;