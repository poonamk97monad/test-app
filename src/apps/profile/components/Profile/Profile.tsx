import React from "react";
import { Layout } from "@shared/components";
import { Sidebar } from './Sidebar'
import Accordion from 'react-bootstrap/Accordion'



interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  return <Layout title={"Profile | Assets Store"}>

    <div id="main-wrapper" class="main-wrapper d-flex">
      <Sidebar></Sidebar>
      <div class="main-content">
        <div class="page-title">
          <div class="left">
            <h1>My Account Settings</h1>
          </div>
          <div class="right">
            <div class="action-btns">
              <a href="javascript:void(0);" class="btn btn-secondary"><i class="icon"></i>Edit</a>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="card card-form-view">
            <div class="card-header">
              <h4>Personal Information</h4>
            </div>
            <div class="card-body">
              <div class="card-item-list">
                <div class="item">
                  <div class="item-key">Name</div>
                  <div class="item-value">Omkar kelkar</div>
                </div>
                <div class="item">
                  <div class="item-key">Username</div>
                  <div class="item-value">Omkar_Monad</div>
                </div>
                <div class="item">
                  <div class="item-key">Email</div>
                  <div class="item-value">omkar.kelkar@monadinfotech.com</div>
                </div>
                <div class="item">
                  <div class="item-key">Location</div>
                  <div class="item-value">India</div>
                </div>
                <div class="item">
                  <div class="item-key">Timezone</div>
                  <div class="item-value">Asia/Kolkata</div>
                </div>
                <div class="item">
                  <div class="item-key">Preferred language</div>
                  <div class="item-value">English</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card card-form-view">
            <div class="card-header">
              <h4>Marketing Activities</h4>
            </div>
            <div class="card-body">
              <div class="card-item-list">
                <div class="item">
                  <div class="item-key">Marketing Activities Preferences</div>
                  <div class="item-value">Change the Marketing Activities Unity may direct to you (including via email and social media).</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card card-form-view">
            <div class="card-header">
              <h4>Account Management</h4>
            </div>
            <div class="card-body">
              <div class="card-item-list">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                  <div class="item">
                    <div class="item-collapse">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Request to Delete Your Account</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>By clicking "Delete Account", you can submit an account deletion request that will permanently remove the account and all associated personal data.</li>
                            <li>Please note that certain financial record-keeping information may be maintained in our systems as part of our federal and state compliance obligations. Deleting your Unity account does not relieve you of the obligation to pay any outstanding subscription amounts owed. Also, Unity may not be able to fulfill a request to delete a project without first receiving an account administrator’s permission. Please refer to our <a href="javascript:void(0);">Privacy Policy</a> for additional details.</li>
                            <li>Click "Delete Account" to learn more.</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                  </div>
                </Accordion>
              </div>




            </div>




          </div>
        </div>
      </div>
    </div>
  </Layout>;
};