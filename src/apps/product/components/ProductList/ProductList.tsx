import React, { useState } from "react";
import { Layout } from "@shared/components";
import { MainProductSection } from "../ProductStyles.tsx";
import { Container, Row, Col, Stack, Card, Badge,Table, Button, Modal } from "react-bootstrap";

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const rows = [
    {
        _id: "56cf587fe46adb3b8960afe2",
        price: 2000,
        title: "ps3",
        url: "www.google.com",
    },
      {
        _id: "56db2bd434df9046e0643d22",
        price: 499,
        title: "HENRIKSDAL",
        url: "http://www.ikea.com/se/sv/catalog/products/S59847817/",
    }
];

function renderRow(rows){
    return (
        <tr>
            <td>{ rows._id }</td>
            <td>{ rows.price }</td>
            <td>{ rows.title }</td>
            <td>{ rows.url }</td>
        </tr>
    );
}

return <Layout title={"Product List | Assets Store"}>
        <MainProductSection className="d-flex">
          {/* Sidebar Section */}
          <div className="leftSidebar">
            <div className="leftSidebarContent">
              <aside className="asideSection">
                <nav className="leftMainNav">
                  {/* Nav Section Heading */}
                  <p className="navSectionHeading">MY PACKAGES</p>

                  {/* Nav Menu Items */}
                  <ul className="leftMenuList">
                    <li className="leftMenuListItem">
                      <a href="javascript:void(0);" title="Create a package" onClick={handleShow}>
                        <span> + Create a package</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="rightSectionContent">
            <div className="rightContentHeaderContainer">
              <div className="rightContentHeader">
                <div className="rightContentHeaderData">
                  <div className="leftSectionData">
                    <h2>All Packages</h2>
                  </div>
                  <div className="rightSectionData">
                    <Button variant="primary" onClick={handleShow}>Create Package</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightInnerContent">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>url</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((item, index) => (
                    <tr data-index={index}>
                      <td>{item._id}</td>
                      <td>{item.price}</td>
                      <td><a href={"/product/edit/"+item._id}>{item.title}</a></td>
                      <td>{item.url}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>

          {/* Temporary Modal for checking */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> 

        </MainProductSection>

           
      </Layout>;
};