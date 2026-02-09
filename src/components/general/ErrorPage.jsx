
import classError from  './style/ErrorPage.module.css'
import {NavLink} from 'react-router-dom'
import Button from '../UI/Button'
export default function ErrorPage() {
    return (
        <div className={classError.errorPage} >
            <h1>ErrorPage</h1>
        <Button text={'Go to Home'} isLink={true} path={'/'} />
        </div>
    );
}