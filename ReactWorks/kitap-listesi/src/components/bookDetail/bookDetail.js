import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deSelectBook } from '../../actions';


class BookDetail extends Component {
  renderContent() {
    const {selectedBook } = this.props;
    if (selectedBook.isbn) {
      return (
        <div className='ui cards'>
          <div className='card'>
          <div className="content">
            <div className="header">{selectedBook.title}</div>
            <div className="description">{selectedBook.description}</div>
          </div>
          <div className="ui bottom attached button"
          onClick={() => {
            this.props.deSelectBook();
          }}>
            Unselect Book
          </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        the book is not selected
      </div>
    )
  }
  render() {
    return (
      <div>
          {this.renderContent()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook
  }
}
export default connect(mapStateToProps, { deSelectBook })(BookDetail);