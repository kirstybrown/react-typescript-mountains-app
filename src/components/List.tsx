import React from "react";
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({mountains}) => {

    const renderList = (): JSX.Element[] => {
        return mountains.map((mountain) => {
            return (<li className="List">
            <div className="List-header">
                <img className="List-img" src={mountain.url} alt={mountain.name}/>
                <h2>{mountain.name}</h2>
            </div>
            <p>{mountain.height}m</p>
            <p className="List-note">{mountain.description}</p>
        </li>)
        })
    }

    return (

        <ul>
            {renderList()}
        </ul>
    )
}

export default List;