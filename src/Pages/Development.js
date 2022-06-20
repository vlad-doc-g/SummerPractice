import React, {Component} from 'react'
import bckgr from '../assets/kalyaz-fon.jpg'

export default class Development extends Component {
    render() {
        return (
            <>
                <div class="back-photo-container-razrabotka">
                    <img
                        className="d-block w-100"
                        class='back-photo-razrabotka'
                        src={bckgr}
                    />
                </div>
                <div className='text-razrab'>
                    Скоро здесь будет раздел "Разработка"
                </div>
            </>
        )
    }
}