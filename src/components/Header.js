import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Visibility } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: null })

    render() {
        const { menuFixed } = this.state
        return (
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}
            >
                <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
                >
                    <Container text>
                        <Menu.Item>
                            <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                        </Menu.Item>
                        <Menu.Item header>Movie</Menu.Item>
                        <Menu.Item as={Link} to='/movies'>Movies</Menu.Item>
                        <Menu.Item as='a'>Add New </Menu.Item>
                    </Container>
                </Menu>
            </Visibility>
        )
    }
}

export default Header