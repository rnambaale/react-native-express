import React, { Component } from 'react';
import { Link } from 'react-router';

import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

export default class TodoList extends Component {
  render() {
    return (
      <Page title={'Todo List'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={{paddingRight: '30px'}}>
              <div style={styles.h3}> Overview </div>
              <div style={styles.p}>
                Our first exercise will be a simple Todo List. If you get stuck at any point, you can look to the examples in this guide, as there will be a lot of overlap in code.
              </div>
              <div style={styles.p}>
                Let's build the app on the right. We'll break it down into smaller sections and build it piece-by-piece. Feel free to reference previous sections.
              </div>
              <div style={styles.h4}> Download </div>
              <div style={styles.p}>
                Download the basic project template here to begin:
              </div>
              <div style={styles.h4}> Sections </div>
              <ul>
                <li> <Link to={'todo_list_1'}> Step 1 - App setup </Link> </li>
                <li> <Link to={'todo_list_2'}> Step 2 - Input and first Redux action </Link> </li>
                <li> <Link to={'todo_list_3'}> Step 3 - List and Checkbox </Link> </li>
                <li> <Link to={'todo_list_4'}> Step 4 - Remove completed and styling </Link> </li>
              </ul>
            </div>
            <div style={{border: '1px solid black'}}>
              <img
                width={280}
                src={'todo-screenshot.png'}
              />
            </div>
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}