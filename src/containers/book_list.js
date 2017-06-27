import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from "../actions/index";

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
            <li
             key={book.title} 
             onClick={() => this.props.selectBook(book)}
             className="list-group-item">
             {book.title}
             </li>
            );
        });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}
function mapStateToProps(state){
    //whatever is returnedwill show up as props inside of BookList
    return{
         books: state.books
    }   
}
//Anything returned from this function will end up as propson the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called,the result shoud be passed to all the reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);