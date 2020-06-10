import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink, withRouter } from 'react-router-dom'

function MyNavbar(props) {
    const { auth, name } = props

    const loginButton = (
        <>
            <Button
                variant="outline-light"
                onClick={() => {
                    props.history.push('/memberlogin')
                }}
            >
                登入
      </Button>
        </>
    )
    const logoutButton = (
        <>
            <span style={{ color: '#ffffff' }}>{name}, 你好</span>
            <Button
                variant="outline-light"
                onClick={() => {
                    props.history.push('/memberlogin')
                }}
            >
                登出
      </Button>
        </>
    )
    const displayButton = auth ? logoutButton : loginButton
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="GYM">GYM</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* 把Nav.Link當作NavLink來使用 */}
                    {/* 記得首頁`/`要加exact作精確比對，不然都會一直點亮 */}
                    <Nav.Link as={NavLink} to="/OrderList" exact>
                        訂單列表
                  </Nav.Link>
                </Nav>
                <Form inline>{displayButton}</Form>
            </Navbar>
        </>
    )
}

export default withRouter(MyNavbar)