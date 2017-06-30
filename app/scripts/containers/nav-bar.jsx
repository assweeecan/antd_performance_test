import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Icon, Menu
} from 'antd';

const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const NavBar = (props) => {
  const { pathname } = props.router.location;
  return (
    <Menu
      mode="inline"
      selectedKeys={[pathname]}
    >
      <MenuItemGroup title="下拉多选框">
        <MenuItem key="/select-page">
          <Link to="/select-page">
            <Icon type="mail" /> 下拉多选框
          </Link>
        </MenuItem>
        <MenuItem key="/select-optimized-page">
          <Link to="/select-optimized-page">
            <Icon type="mail" /> 下拉多选框 优化后
          </Link>
        </MenuItem>
      </MenuItemGroup>

      <MenuItemGroup title="选择框">
        <MenuItem key="/checkbox-page">
          <Link to="/checkbox-page">
            <Icon type="mail" /> 选择框
          </Link>
        </MenuItem>
        <MenuItem key="/checkbox-optimized-page">
          <Link to="/checkbox-optimized-page">
            <Icon type="mail" /> 选择框 优化后
          </Link>
        </MenuItem>
      </MenuItemGroup>

      <MenuItemGroup title="标签">
        <MenuItem key="/tag-page">
          <Link to="/tag-page">
            <Icon type="mail" /> 标签
          </Link>
        </MenuItem>
        <MenuItem key="/tag-optimized-page">
          <Link to="/tag-optimized-page">
            <Icon type="mail" /> 标签 优化后
          </Link>
        </MenuItem>
      </MenuItemGroup>
    </Menu>
  );
};

NavBar.defaultProps = {
  router: {
    location: {
      pathname: '',
    }
  }
};

NavBar.propTypes = {
  router: PropTypes.shape({
    location: PropTypes.objectOf(PropTypes.any),
  }),
};

function mapStateToProps(state) {
  return { router: state.router };
}
export default connect(mapStateToProps)(NavBar);
