import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const InputLink = (props) => {
  const [method, setMethod] = useState('GET')
  const [link, setLink] = useState('https://jsonplaceholder.typicode.com/posts/1/comments')
  const [response, setResponse] = useState([])

  useEffect(() => {
    console.log("Data", props.data);
  })

  const makeGetRequest = () => {
    console.log(method);
    switch (method) {
      case "GET":
        return axios.get(link)
        .then(res => {
          console.log("Response-", res.data)
          props.getData(res.data)
          setResponse(res.data)
        })
        .catch(err => {
          console.log("Error--", err);
        })
    
      case 'POST':
        return console.log("This is post method");
    }
    
  }

  const handleMethodChange = (e) => {
    const value = e.target.value
    setMethod(value)
  }

  const handleLinkChange = (e) => {
    const value = e.target.value
    setLink(value)
  }

  return (
    <div className='d-flex justify-content-between w-100 '>
      <div className='body_box_mid_1_box d-flex w-100'>
        <div className='body_box_mid_1_select w-25 d-flex justify-content-between align-items-center'>
          <select value={method} onChange={handleMethodChange} className='dropdown_container'>
            <option className='dropdown_container_items' name="get">GET</option>
            <option className='dropdown_container_items' name="post">POST</option>
          </select>
        </div>
        <div className='body_box_mid_1_input w-100 mr-2'>
          <input className='w-100' value={link} onChange={handleLinkChange} />
        </div>
      </div>
      <div className='body_box_mid_1_button mr-1'>
        <button className='px-2' onClick={makeGetRequest}>
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
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (res) => dispatch({type: 'GETRequest', payload: res})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLink);