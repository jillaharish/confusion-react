import React, { Component } from 'react';
import { Card, CardImg,  CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    
    renderComments(dish){
        if (dish != null){
            const coms = dish.comments.map((comment) => {
                const date = new Date(comment.date)
                return(
                <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {date.toDateString()}</p>
                </li>
                )
            });

            return(
                <div>
                    <h1>Comments</h1>
                <ul className="list-unstyled">
                    
                        {coms}
                    
                </ul>
                </div>
            )
        } else{
            return(
                <div></div>
            )
        }
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                     <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                     </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            );
        }

    }

    render(){
        return(
            <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderComments(this.props.dish)}
                    </div>
            </div>
        );
    }
}
export default DishDetail;