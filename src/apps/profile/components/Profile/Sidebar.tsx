import React from "react";
import { Layout } from "@shared/components";

interface ProfileProps {}

export const Sidebar: React.FC<ProfileProps> = () => {
  return (
    <div class="sidebar-navigation">
      <nav>
        <ul class="list-unstyled">
          <li>
            <a href="javascript:void(0);">Add Seats <span class="badge">new</span></a>
          </li>
          <li>
            <a href="javascript:void(0);" class="selected">My Account</a>
            <ul>
              <li>
                <a href="javascript:void(0);" class="selected">Settings</a>
              </li>
              <li>
                <a href="javascript:void(0);">Privacy</a>
              </li>
              <li>
                <a href="javascript:void(0);">Security</a>
              </li>
              <li>
                <a href="javascript:void(0);">My Seats</a>
              </li>
              <li>
                <a href="javascript:void(0);">Redeem a product code</a>
              </li>
              <li>
                <a href="javascript:void(0);">Sub-processors</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">Project Management</a>
          </li>
          <li>
            <a href="javascript:void(0);">Unity Dashboard</a>
          </li>
          <li>
            <a href="javascript:void(0);">Organizations</a>
          </li>
        </ul>
      </nav>

      <small>If you have previously purchased subscriptions and perpetual licenses through our former Unity store, please click to <a href="javascript:void(0);">manage your other licenses</a>.</small>
      <small>Go to the <a href="javascript:void(0);">Unity Dashboard</a> to manage projects, discover and configure Unity services and find service support.</small>


    </div>
  );
};