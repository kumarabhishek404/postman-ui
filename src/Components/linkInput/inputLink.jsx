import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const InputLink = (props) => {
  const [method, setMethod] = useState('GET')
  const [link, setLink] = useState('')
  const [response, setResponse] = useState([])
  const [paraKey, setParaKey] = useState('')
  const [resultLink, setResultLink] = useState('')

  useEffect(() => {
    console.log("paramKey", props.paramKey);
    addParamKey(props.paramKey)
    console.log("paraKey", paraKey);
    console.log("link", link);
    console.log("Final --", `${link}${paraKey}`);
    const finalLink = link.concat(props.paramKey)
    setResultLink(finalLink)
  }, [props.paramKey, props.added_headers, link])

  const addParamKey = (key) => {

    if (link.includes('?')) {
      setParaKey(props.paramKey)
      // setLink(link.concat(`&${props.paramKey}`))
    }
    else {
      // setLink(link => link.concat(`?${key}`))
      setParaKey(props.paramKey)
    }
  }

  // const setRequestTime = (time) => {
  //   console.log("Time--", time);
  //   if()
  // }
  const pre_headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  const headers = {
    ...props.added_headers
  }


  const makeGetRequest = () => {
    const date = new Date()
    switch (method) {
      case "GET":
        return axios.get(link, {
          ...headers
        })
          .then(res => {
            props.getData(res.data)
            setResponse(res.data)
            props.setHistory({
              time: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`,
              history: [
                { method: method, link: link, response: res.data }
              ]
            })
          })
          .catch(err => {
            console.log("Error--", err);
          })
        break

      case 'POST':
        return axios.post(link, props.body_data)
          .then((res) => {
            // console.log("Response", response);
            props.getData(res.data)
            setResponse(res.data)
          })
          .catch((err) => {
            console.log("Error", err);
          })
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
        {/* <p>{props.paramKey}</p> */}
        <div className='body_box_mid_1_input w-100 mr-2'>
          <input className='w-100' value={resultLink} onChange={handleLinkChange} />
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
    data: state.data,
    body_data: state.bodyData,
    paramKey: state.paramKey,
    added_headers: state.headers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (res) => dispatch({ type: 'GETRequest', payload: res }),
    setHistory: (res) => dispatch({ type: "SETHistoryList", payload: res })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLink);