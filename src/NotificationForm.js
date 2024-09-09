import React, { useState } from 'react';
import { baseurl } from './Component/Baseurl';
import Headermobile from '././Mobile/Headermobile';

function NotificationForm() {
  const [formData, setFormData] = useState({
    title: '',
    Message: '',
    Img_url: '',
    Url: '',
    icon:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 const base64Token = formData.Url;

//     const vase=atob(base64Token);
// console.log(vase);
    // Createc an object to represent the notification data
    console.log(base64Token);
    const notificationData = {
      title: formData.title,
      message: formData.Message,
      imgUrl: formData.Img_url,
      url:`https://rcpt.in/notificationpop?paramt=${encodeURIComponent(formData.Url)}`,
      icon: formData.icon,
    };

    // Make a POST request to send the notification data to the server
    fetch(`${baseurl}/rcpt-api/rcptaddnotificationdetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       

      },
      body: JSON.stringify(notificationData),
    })
      .then((response) => {
        if (response.ok) {
          // Notification was successfully created
          alert('Notification created successfully');
          window.location.reload();
          // window.location.href=`/notification/${base64Token}`
        } else {
          // Handle the error here
          alert('Failed to create notification');
          // window.location.href=`http://localhost:3000/notification?paramt=${encodeURIComponent(formData.Url)}`;

        }
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  };

  return (
    <div className="container-fluid ">
      <Headermobile/>
      <div className="row justify-content-center my-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center">Notification Form</h1>
              <form onSubmit={handleSubmit}>
              <div className="form-group m-2 ">
                  <label htmlFor="Url" >Icon: </label>
                  <input
                    type="url"
                    id="icon"
                    name="icon"
                    className="form-control"
                    value={formData.icon}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group m-2">
                  <label htmlFor="title">Notification Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group m-2">
                  <label htmlFor="Message">Notification Description:</label>
                  <input
                    type="text"
                    id="Message"
                    name="Message"
                    className="form-control"
                    value={formData.Message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group m-2">
                  <label htmlFor="Img_url">Image URL:</label>
                  <input
                    type="url"
                    id="Img_url"
                    name="Img_url"
                    className="form-control"
                    value={formData.Img_url}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group m-2 ">
                  <label htmlFor="Url">Redirection URL:</label>
                  <input
                    type="url"
                    id="Url"
                    name="Url"
                    className="form-control"
                    value={formData.Url}
                    onChange={handleChange}
                  />
                </div>

                
                <div className="text-center">
                  <button type="submit" className="btn btn-success m-2">Push Notification</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationForm;