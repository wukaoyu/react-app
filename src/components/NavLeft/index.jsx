import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

    UNSAFE_componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }   
    
    renderMenu = (data) => {
        // console.log(data)
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} title={item.title}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }
    render() {
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg"/>
                    <h1>共享单车管理</h1>
                </div>
                <Menu theme="dark">
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}